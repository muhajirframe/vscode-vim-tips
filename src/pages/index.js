import React from 'react'
import { Heading } from 'rebass'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AllGifs from '../components/AllGifs'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Heading fontSize={5} textAlign="center" pb={5}>
      Visual Studio Code + Vim = ❤️
    </Heading>
    <AllGifs />
  </Layout>
)

export default IndexPage
