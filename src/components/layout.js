import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import Link from './Link'
import theme from '../theme'

import './layout.css'
import Container from './Container'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Container maxWidth={960} pt={5} mx="auto">
          {children}
          <footer>
            Contribution welcomed at{' '}
            <Link to="https://github.com/muhajirframe/vscode-vim-website/">
              muhajirframe/vscode-vim-website
            </Link>
          </footer>
        </Container>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
