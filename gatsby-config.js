module.exports = {
	siteMetadata: {
		title: `Irrelevant Blog`,
		description: `A blog containing my personal insights as I delve into the dark depths of the programming world`,
		author: `@C-Sinclair`,
		url: 'blog.irrelevant.ninja',
		siteUrl: `https://blog.irrelevant.ninja`,
	},
	plugins: [
		`gatsby-plugin-netlify`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `articles`,
				path: `${__dirname}/src/articles`,
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
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.svg$/,
				},
			},
		},
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.md`, `.mdx`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
							wrapperStyle: fluidResult => `flex:${_.round(fluidResult.aspectRatio, 2)}`,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
				feeds: [
					{
						serialize: ({ query: { site, allMdx } }) => {
							return allMdx.edges.map(edge => {
								return Object.assign({}, edge.node.frontmatter, {
									description: edge.node.excerpt,
									date: edge.node.frontmatter.date,
									url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
									guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
									custom_elements: [{ 'content:encoded': edge.node.body }],
								});
							});
						},
						query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      body
                      frontmatter {
                        title
                        date
												path
                      }
                    }
                  }
                }
              }
            `,
						output: '/rss.xml',
						title: 'Irrelevant Ninja Blog Feed',
					},
				],
			},
		},
	],
};
