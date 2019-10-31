import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import Gated from "../components/gated"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>this is the development branch</div>
    <Projects />
    <Gated>
      <h2>My Projects</h2>
    </Gated>
  </Layout>
)

export default IndexPage
