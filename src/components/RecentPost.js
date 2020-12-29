import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"


export default function RecentPost() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 5) {
        nodes {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
    `
  )

  const post =  allMarkdownRemark.nodes
  const MAX_TITLE_LENGTH = 24;

    return (
        <div>
          <ul className="list">
          {
            post.map((post) => (
            <li  key={post.fields.slug} >
              <Link className="link" to={post.fields.slug}>
                {
                post.frontmatter.title.length >= MAX_TITLE_LENGTH 
                ? post.frontmatter.title.slice(0, MAX_TITLE_LENGTH) + "..." 
                : post.frontmatter.title
                }
              </Link>
            </li>
            ))
          }
          </ul>
        </div>
      )
}


