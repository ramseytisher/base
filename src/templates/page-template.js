import React, { useContext, useEffect, useState } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { UserContext } from '../context/user-context'

import Layout from '../components/layout'

export default function PageTemplate({ data: { general, gated } }) {
  const { accountInfo } = useContext(UserContext)
  const [isAuthz, setIsAuthz] = useState(false)

  useEffect(() => {
    try {
      if(accountInfo.has.indexOf(general.id) !== -1) {
        setIsAuthz(true)
      } else {
        setIsAuthz(false)
      }
    } catch (error) {
      setIsAuthz(false)
    }
    
  }, [accountInfo, general])

  return (
    <Layout>
      <h1>{general.frontmatter.title} | {general.id}</h1>
      <MDXRenderer>{general.body}</MDXRenderer>
      { isAuthz && <MDXRenderer>{gated.body}</MDXRenderer> }
    </Layout>
  )
}

export const pageQuery = graphql`
  query ContainerPageQuery($id: String, $gated: String) {
    general: mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
    gated: mdx(
      fields: {gated: {id: {eq: $gated}}}, 
      fileAbsolutePath: {regex: "\/gated.mdx/"}
    ) {
      id
      body
    }
  }
`