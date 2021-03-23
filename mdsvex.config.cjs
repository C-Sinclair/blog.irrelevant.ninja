const containers = require('remark-containers')

module.exports = {
	extensions: [".svx", ".md"],
	smartypants: {
		dashes: "oldschool",
	},
	remarkPlugins: [containers],
	rehypePlugins: [],
	layout: {
		article: 'src/routes/articles/_article.svelte',
		headed: 'src/routes/_headed.svelte',
		_: 'src/routes/_md.svelte'
	}
};
