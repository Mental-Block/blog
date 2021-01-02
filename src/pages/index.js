import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import PostFilters from "../components/PostFilter";

export default function BlogIndex({ data }){
  const posts = data.allMarkdownRemark.nodes

  // SEO
  const seo = {
    title: "All posts",
    meta: [
            {
              name: `description`,
              content: "",
            },
          ]
  }
  
  if (posts.length === 0) {
    return (
      <Layout layoutType="blog">
        <SEO {...seo} />
        <h1 className="header">Recent Posts</h1>
        <p>
          Sorry I currently only have good idea's... So i'm not going to share them with you! 
          Maybe all have one in the near future!
        </p>
      </Layout>
    )
  }

  return (
    <Layout layoutType="blog">
      <SEO {...seo} />
        <h1 className="header">Recent Posts</h1>
        <PostFilters posts={posts} />
    </Layout>
  )
}

export const pageQuery = graphql`
{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 15) {
    nodes {
      excerpt
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        filterType
        tag
      }
    }
  }
}
`
