module.exports = {
	siteMetadata: {
		title: `Irrelevant Blog`,
		description: `A blog containing my personal insights as I delve into the dark depths of the programming world`,
		author: `@C-Sinclair`,
		url: 'blog.irrelevant.ninja'
	},
	plugins: [
		`gatsby-plugin-netlify`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `articles`,
				path: `${__dirname}/src/articles`
			}
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
				icon: `src/images/ninja.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
							wrapperStyle: fluidResult =>
								`flex:${_.round(
									fluidResult.aspectRatio,
									2
								)}`
						}
					}
				]
			}
		}
	]
}
