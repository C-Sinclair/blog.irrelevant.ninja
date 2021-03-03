/**
 * @type {import("snowpack").SnowpackUserConfig }
 * */
module.exports = {
	mount: {
		public: { url: '/', static: true },
		src: { url: '/' }
	},
	plugins: [
		'@snowpack/plugin-dotenv',
		['@snowsvex/snowsvex-plugin', { pagesDirs: ['pages', 'articles'] }]
	],
	routes: [{ match: 'routes', src: '.*', dest: '/index.html' }]
}
