import React from "react"
import Menu from '../components/menu'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Menu />
      <h1>Welcome to this demonstration website.</h1>
  </Layout>
)

export default IndexPage
