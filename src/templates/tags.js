import { Link, graphql } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/Layout"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with ${tag}`

  return (
    <>
    <Layout>
      <div className="center column">
        <h1 className="header">{tagHeader}</h1>
        <ul className="list">
          {edges.map(({ node }) => {
            return (
              <li key={node.fields.slug}>
                <Link className="link tags__link" to={node.fields.slug}>
                    {node.frontmatter.title}
                  </Link>
              </li>
            )
          })}
          <Link className="link tags__link header" to="/tags">Back &larr;</Link>
        </ul>
        
      </div>
    </Layout>
    </>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tag: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`