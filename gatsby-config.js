module.exports = {
	siteMetadata: {
		title: `Irrelevant Blog`,
		description: `A blog containing my personal insights as I delve into the dark depths of the programming world`,
		author: `@C-Sinclair`,
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `irrelevant-blog`,
				short_name: `blog`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/ninja.png`, // This path is relative to the root of the site.
			},
		}
	],
}
