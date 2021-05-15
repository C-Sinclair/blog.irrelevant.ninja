import esbuild from 'esbuild'
import xdm from 'xdm/esbuild.js'

async function build() {
	await esbuild.build({
		entryPoints: ['src/index.jsx' /* 'src/app.jsx' */],
		jsxFactory: 'h',
		jsxFragment: 'Fragment',
		bundle: true,
		outdir: 'dist',
		plugins: [xdm({})]
	})
}

build()
