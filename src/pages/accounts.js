import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Accounts from "../components/accounts"

export default () => (
  <Layout>
    <SEO title="Accounts" />
    <h1>All Accounts</h1>
    <Accounts />
  </Layout>
)