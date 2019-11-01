import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Account from "../components/account"

export default () => (
  <Layout>
    <SEO title="Accounts" />
    <h1>Account Info</h1>
    <Account />
  </Layout>
)