const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;
	const result = await graphql(`
		{
			allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
				edges {
					node {
						id
						excerpt
						frontmatter {
							date
							author
							path
							title
							shortTitle
						}
					}
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	const articleTemplate = path.resolve('src/layouts/article.jsx');

	result.data.allMdx.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.path,
			component: articleTemplate,
		});
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `Mdx`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value,
		});
	}
};
