const path = require('path')

exports.createPages = ({boundActionCreators, graphql}) => {
    const { createPage } = boundActionCreators
    const articleTemplate = path.resolve('src/templates/article.jsx')
    return graphql(`
        {
            allMarkdownRemark {
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
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: articleTemplate
            })
        })
    })
}
