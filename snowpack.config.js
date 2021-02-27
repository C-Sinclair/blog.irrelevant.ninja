/**
 * @type {import("snowpack").SnowpackUserConfig }
 * */
module.exports = {
	mount: {
		public: { url: '/', static: true },
		src: { url: '/' }
	},
	plugins: [
		// [
		// 	'@snowpack/plugin-svelte',
		// 	{
		// 		preprocess: mdsvex(),
		// 		input: ['.svelte', '.svx']
		// 	}
		// ],
		'@snowpack/plugin-dotenv',
		['snowsvex-plugin', { pagesDirs: ['pages', 'articles'] }]
	],
	routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
	optimize: {
		/* Example: Bundle your final build: */
		// "bundle": true,
	},
	packageOptions: {
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	buildOptions: {
		/* ... */
	}
}
