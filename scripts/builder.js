import { build, loadConfiguration } from 'snowpack'
import fs from 'fs/promises'

const BUILD_ROOT = './build'

const config = await loadConfiguration()
const { result } = await build({ config })

const snowsvex = config.plugins.find(({ name }) => name === '@snowsvex/snowsvex-plugin')
if (!snowsvex) {
	throw new Error(
		'The snowsvex plugin was not found! Install it: `yarn add -D @snowsvex/snowsvex-plugin`'
	)
}
const opts = snowsvex.config()

await Promise.all(
	opts.pagesDirs.map(async opt => {
		const { dir } = opt.hasOwnProperty('dir') ? opt : { dir: opt }
		await renameFiles(dir)
		if (dir === 'pages') {
			// move all of them to root of the build
			const files = await fs.readdir(`${BUILD_ROOT}/pages`)
			const html = files.filter(f => f.includes('.html'))
			await moveToRoot(html)
		}
	})
)

console.log(`🕶️  Wrote ${Object.keys(result).length} files 🕶️`)

console.log('🔥 Successful Snowsvex!')
process.exit(0)

function stripExts(file) {
	if (file.includes('.proxy.js')) return file
	return file.replace('.svelte', '').replace('.svx', '')
}

async function renameFiles(dir) {
	const files = await fs.readdir(`${BUILD_ROOT}/${dir}`)
	await Promise.all(
		files.map(async file => {
			await fs.rename(
				`${BUILD_ROOT}/${dir}/${file}`,
				`${BUILD_ROOT}/${dir}/${stripExts(file)}`
			)
		})
	)
}

async function moveToRoot(files) {
	await Promise.all(
		files.map(async file => {
			await fs.rename(`${BUILD_ROOT}/pages/${file}`, `${BUILD_ROOT}/${stripExts(file)}`)
		})
	)
}
