const fs = require('fs').promises
const svelte = require('svelte/compiler')
const { mdsvex } = require('mdsvex')

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
	return {
		name: 'snowsvex-plugin',
		resolve: {
			input: ['.svelte', '.svx'],
			output: ['.js', '.css', '.html']
		},
		config() {
			console.log('Successfully loaded snowsvex', { opts })
		},
		/**
		 *
		 * @param {{ filePath: string }} args
		 */
		async load(args) {
			let { filePath, fileExtension } = args
			filePath = filePath.replaceAll(fileExtension, '')

			const defaultTemplate = opts.defaultTemplate || './snowsvex-plugin/base.html'
			const pagesDirs = opts.pagesDirs || [{ dir: 'pages', template: defaultTemplate }]
			const loaderPath = opts.loaderPath || './snowsvex-plugin/loader.js'

			let output = {}

			const segments = filePath.split('/')
			const filename = segments[segments.length - 1].split('.')[0]

			const contents = await fs.readFile(filePath, 'utf-8')
			const preprocessed = await svelte.preprocess(contents, mdsvex(), { filename: filePath })
			const { js, css } = svelte.compile(preprocessed.toString(), {
				// generate: 'ssr',
				// format: 'cjs'
			})
			if (css && css.code) {
				output['.css'] = css
			}
			if (js && js.code) {
				output['.js'] = js
			}

			await Promise.all(
				pagesDirs.map(async opt => {
					const { dir, template } = opt.hasOwnProperty('dir')
						? opt
						: { dir: opt, template: defaultTemplate }
					if (filePath.includes(dir)) {
						const html = await generateHtml({ dir, filePath, filename, template })
						output['.html'] = { code: html }
						const loader = await fs.readFile(loaderPath, 'utf-8')
						// console.log({ loader })
						await fs.mkdir(`./build/dist/${dir}/`, { recursive: true })
						await fs.writeFile(
							`./build/dist/${dir}/${filename}-loader.js`,
							loader.replace('{{}}', `/${dir}/${filename}`)
						)
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
	const outputJs = `/${dir}/${filename}-loader.js`
	const outputCss = `/${dir}/${filename}.css`
	const processedHtml = base
		.replace('{{JS}}', outputJs)
		.replace('{{CSS}}', outputCss)
		.replace('{{TITLE}}', title || filename)
	return processedHtml
}
