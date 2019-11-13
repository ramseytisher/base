const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    // you only want to operate on `Mdx` nodes. If you had content from a
    // remote CMS you could also check to see if the parent node was a
    // `File` node here
    if (node.internal.type === "Mdx") {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: "slug",
            node,
            value: `${value}`,
        })

        createNodeField({
            name: "image",
            node,
            value: `./cover.jpg`
        })

        createNodeField({
            name: "gated",
            node,
            value:`./gated.mdx` 
        })
    }
}

const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const pages = await graphql(`
        query {
            allMdx(filter: {fileAbsolutePath: {regex: "\/index.mdx/"}}) {
                edges {
                    node {
                        id
                        fields {
                            slug
                            gated {
                                id
                            }
                        }
                    }
                }
            }
        }
    `)
    if (pages.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    pages.data.allMdx.edges.forEach(({ node }, index) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/page-template.js`),
            context: { id: node.id, gated: node.fields.gated.id },
        })
    })
}