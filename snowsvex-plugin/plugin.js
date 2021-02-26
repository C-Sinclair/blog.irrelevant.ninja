const fs = require('fs').promises
const path = require('path')
const svelte = require('svelte/compiler')
const { mdsvex } = require('mdsvex')
const { createMakeHot } = require('svelte-hmr')

function makeHot(...args) {
	makeHot = createMakeHot({ walk: svelte.walk })
	return makeHot(...args)
}

/**
 * @typedef {string | { dir: string, template: string }} PageDir
 * @typedef {Object} Options
 * @property {string} Options.defaultTemplate
 * @property {PageDir[]} Options.pagesDirs
 */

/**
 * @param {any} snowpackConfig
 * @param {Options} opts
 */
module.exports = function (snowpackConfig, opts) {
	const defaultTemplate = opts.defaultTemplate || './snowsvex-plugin/base.html'
	const pagesDirs = opts.pagesDirs || [{ dir: 'pages', template: defaultTemplate }]
	const loaderPath = opts.loaderPath || './snowsvex-plugin/loader.js'
	const isDev = process.env.NODE_ENV !== 'production'
	const useSourceMaps = snowpackConfig.buildOptions.sourceMaps
	const hmrOptions = opts.hmrOptions

	return {
		name: 'snowsvex-plugin',
		resolve: {
			input: ['.svelte', '.svx'],
			output: ['.js', '.css', '.html']
		},
		knownEntrypoints: [
			'svelte/internal',
			'svelte-hmr/runtime/hot-api-esm.js',
			'svelte-hmr/runtime/proxy-adapter-dom.js'
		],
		config() {
			console.log('Successfully loaded snowsvex', { opts })
		},
		/**
		 *
		 * @param {{ filePath: string }} args
		 */
		async load({ filePath, fileExtension, isHmrEnabled, isSSR }) {
			const segments = filePath.split('/')
			const filename = segments[segments.length - 1].split('.')[0]

			const contents = await fs.readFile(filePath, 'utf-8')
			const preprocessed = await svelte.preprocess(contents, mdsvex(), { filename: filePath })

			const compileOptions = {
				generate: isSSR ? 'ssr' : 'dom',
				hydratable: true,
				css: false,
				dev: isDev,
				outputFilename: filePath,
				filename: filePath
			}

			const compiled = svelte.compile(preprocessed.toString(), compileOptions)
			const { js, css } = compiled
			const output = {
				'.js': {
					code: js.code,
					map: useSourceMaps ? js.map : undefined
				}
			}

			if (isHmrEnabled && !isSSR) {
				output['.js'].code = makeHot({
					id: filePath,
					compiledCode: js.code,
					hotOptions: {
						...hmrOptions,
						absoluteImports: false,
						injectCss: true,
						noOverlay: true
					},
					compiled,
					originalCode: preprocessed,
					compileOptions
				})
			}

			if (!compileOptions.css && css && css.code) {
				output['.css'] = {
					code: css.code,
					map: useSourceMaps ? css.map : undefined
				}
			}

			// const ssr = svelte.compile(preprocessed.code, {
			// 	generate: 'ssr',
			// 	hydratable: true,
			// 	format: 'cjs'
			// })
			const Module = module.constructor
			const m = new Module(filePath, module.parent)
			m.filename = filePath
			m.paths = Module._nodeModulePaths(path.dirname(filePath))
			console.log({ m })
			// console.log(ssr.js.code)
			// m._compile(ssr.js.code, filePath)
			// comp = m.exports.default

			// 			const render = comp.render({})
			// 			const src = path.basename(filePath).replace('.svelte', '.js')
			// 			output['.html'] = {
			// 				code: `
			// <!doctype html>
			// <html>
			// <head>
			// <meta charset="utf-8" />
			// ${render.head}
			// <style>
			// ${render.css.code}
			// </style>
			// </head>
			// <body>
			// ${render.html}
			// <script type=module>
			// 	import comp from "./${src}";

			// 	let app = new comp({
			// 			target: document.body,
			// 			hydrate: true,
			// 	});
			// </script>
			// </body>
			// </html>
			// 				`
			// 			}

			await Promise.all(
				pagesDirs.map(async opt => {
					const { dir, template } = opt.hasOwnProperty('dir')
						? opt
						: { dir: opt, template: defaultTemplate }
					if (filePath.includes(dir)) {
						const html = await generateHtml({ dir, filePath, filename, template })
						output['.html'] = { code: html }
					}
				})
			)

			return output
		}
	}
}

/**
 *
 * @param {Object} args
 * @param {string} args.dir
 * @param {string} args.filePath
 * @param {string} args.filename
 * @param {string} args.title
 * @param {string} args.template
 * @returns {string} -- html string
 */
async function generateHtml({ dir, filePath, filename, template, title }) {
	console.log(`processing page at ${filePath}`)
	const base = await fs.readFile(template, 'utf-8')
	// const outputJs = `/${dir}/${filename}.js`
	const src = path.basename(filePath).replace('.svelte', '.js')

	const outputCss = `/${dir}/${filename}.css`
	const processedHtml = base
		.replace('{{COMP}}', src)
		.replace('{{CSS}}', outputCss)
		.replace('{{TITLE}}', title || filename)
	return processedHtml
}
