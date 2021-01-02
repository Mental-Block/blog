import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import SEO from "../components/Seo"

import {toSlug} from "../util/toSlug"

import Layout from "../components/Layout"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group }
  },
}) => (
  <>
    <SEO title="Tags" />
    <Layout>
    <div className="center column">
      <h1 className="header">Tags</h1>
      <ul className="list">
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link className="link tags__link" to={`/tags/${toSlug(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  </>
)
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default TagsPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tag) {
        fieldValue
        totalCount
      }
    }
  }
`