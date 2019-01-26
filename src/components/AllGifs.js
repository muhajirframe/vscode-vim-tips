import React from 'react'
import { StaticQuery } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query AllGifs {
        allFile(filter: { sourceInstanceName: { eq: "gifs" } }) {
          edges {
            node {
              id
              name
              publicURL
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allFile.edges.map(({ node }) => (
          <img src={node.publicURL} />
        ))}
      </div>
    )}
  />
)
