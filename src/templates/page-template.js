import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from '../components/layout'

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <h1>{mdx.frontmatter.title} | {mdx.id}</h1>
      <h2>Body goes here</h2>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ContainerPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`