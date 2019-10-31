import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grommet, Box } from "grommet"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Grommet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box align="center">
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
