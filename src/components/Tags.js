import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"

import {toSlug} from "../util/toSlug"

export default function Tags() {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tag
              }
            }
          }
        }
      }
    `
  )
   const getFilteredTags = () => {
      let tags = [];

      allMarkdownRemark.edges.map(edge => {
        if (edge.node.frontmatter.tag) {
          tags = tags.concat(edge.node.frontmatter.tag)
        }
      })
      
      const uniq = arrArg => {
        return arrArg.filter((elem, pos, arr) => {
          return arr.indexOf(elem) === pos
        })
      }

   return tags = uniq(tags)
  }

  const post = getFilteredTags()

    return (
        <div>
          <ul className="list">
          {
            post.map((tag) => (
            <li  key={tag} >
              <Link className="link" to={`/tags/${toSlug(tag)}`}>
                {tag}
              </Link>
            </li>
            ))
          }
          </ul>
        </div>
      )
}
