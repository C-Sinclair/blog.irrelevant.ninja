import esbuild from 'esbuild'
import svg from 'esbuild-plugin-svg'
import xdm from 'xdm/esbuild.js'
import fs from 'fs/promises'
import path from 'path'
import { renderToString } from 'preact-render-to-string'

console.time('Overall')

// const articles = await fs.readdir('src/articles')

const preactCompatPlugin = {
	name: 'preact-compat',
	setup(build) {
		const preact = path.join(
			process.cwd(),
			'node_modules',
			'preact',
			'compat',
			'dist',
			'compat.module.js'
		)
		build.onResolve({ filter: /^(react-dom|react)$/ }, args => {
			return { path: preact }
		})
	}
}

async function getPageEntrypoints() {
	const pages = await fs.readdir('src/pages')
	return pages.map(path => `src/pages/${path}`)
}

async function generateHtml(page) {
	try {
		const base = await fs.readFile('public/index.html', 'utf-8')
		const filled = base.replace('[PAGE]', page)
		await fs.writeFile(`dist/${page}.html`, filled, 'utf-8')
	} catch (e) {
		console.log(`Failed to generate ${page} html`)
		console.error(e)
	}
}

// // This wont work as esbuild has already bundled the file :(
// async function injectRender(page) {
// 	const path = `dist/${page}.js`
// 	await fs.readFile(path, 'utf-8').then(async content => {
// 		try {
// 			const lines = content.split('/n')
// 			const component = lines.find(line => line.includes('export default ')).split(' ')[2]
// 			await fs.writeFile(
// 				content.replace(
// 					`export default ${component}`,
// 					`render(<${component} />, document.body)`
// 				)
// 			)
// 		} catch (e) {
// 			console.error(`No export default provided for ${page}`)
// 		}
// 	})
// }

async function render(path) {
	const { default: comp } = await import('../dist/404.js')
	console.log(comp)
	console.log(renderToString(comp))
}

async function build() {
	console.info(`Compiling pages`)
	const entryPoints = await getPageEntrypoints()

	// await esbuild.build({
	// 	entryPoints,
	// 	jsxFactory: 'h',
	// 	jsxFragment: 'Fragment',
	// 	bundle: true,
	// 	outdir: 'dist',
	// 	format: 'esm',
	// 	plugins: [xdm({}), preactCompatPlugin, svg()],
	// 	inject: ['bin/preact-shim.js']
	// })
	await Promise.all(
		entryPoints.map(async entry => {
			let page = entry.replace('src/pages/', '').replace(/\.jsx?/, '')
			console.log(`Generating HTML for ${page}`)
			await generateHtml(page)

			await render(entry)

			// await injectRender(page)
		})
	)
	console.timeLog('Overall', `Generated ${entryPoints.length} pages`)
}

build().then(() => console.timeEnd('Overall'))
