const fs = require('fs').promises
const svelte = require('svelte/compiler')
const { mdsvex, compile } = require('mdsvex')
const yaml = require('js-yaml')
// const { createMakeHot } = require('svelte-hmr')

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
			return { ...opts, defaultTemplate }
		},
		/**
		 *
		 * @param {{ filePath: string }} args
		 */
		async load({ filePath, isHmrEnabled, isSSR }) {
			const segments = filePath.split('/')
			const filename = segments[segments.length - 1].split('.')[0]

			const contents = await fs.readFile(filePath, 'utf-8')
			if (filePath.endsWith('.svx')) {
				const s = await compile(filePath)
				console.log({ s })
			}

			const svexOpts = {
				// layout: './src/Layout.svelte' // TODO make this dynamic
			}
			const preprocessed = await svelte.preprocess(contents, mdsvex(svexOpts), {
				filename: filePath
			})

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

			// TODO get Hmr working
			// if (isHmrEnabled && !isSSR) {
			// 	output['.js'].code = makeHot({
			// 		id: filePath,
			// 		compiledCode: js.code,
			// 		hotOptions: {
			// 			...hmrOptions,
			// 			absoluteImports: false,
			// 			injectCss: true,
			// 			noOverlay: true
			// 		},
			// 		compiled,
			// 		originalCode: preprocessed,
			// 		compileOptions
			// 	})
			// }

			if (!compileOptions.css && css && css.code) {
				output['.css'] = {
					code: css.code,
					map: useSourceMaps ? css.map : undefined
				}
			}

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
	const outputJs = `/${dir}/${filename.replace('.svelte', '.js')}`
	const outputCss = `/${dir}/${filename}.css`
	const processedHtml = base
		.replace('{{COMP}}', outputJs)
		.replace('{{TITLE}}', title || filename)
		.replace('{{CSS}}', outputCss)
	return processedHtml
}

async function compileWithFrontmatter()

// function makeHot(...args) {
// 	makeHot = createMakeHot({ walk: svelte.walk })
// 	return makeHot(...args)
// }
