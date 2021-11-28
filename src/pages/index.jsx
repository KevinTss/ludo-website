import React from "react"

import Layout from "../components/layout"
import Intro from "../components/sections/intro"
import products from "../../_content/products.json"

const HomePage = () => (
  <Layout>
    <Intro />
    {products.items.map(item => (
      <p>{`Product: ${item.name} - ${item.price}euro`}</p>
    ))}
  </Layout>
)

export default HomePage
