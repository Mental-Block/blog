import React, {useCallback, useContext} from 'react'
import {Link, graphql, useStaticQuery} from "gatsby"

import SearchContext from "../context/SearchContext"

export default function SearchPosts() {
    const {search} = useContext(SearchContext)
    
    const {allMarkdownRemark} = useStaticQuery(graphql`
        query{
            allMarkdownRemark {
                    nodes {
                        id
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    `);

    const filteredPosts = useCallback(
        allMarkdownRemark.nodes.filter((post) => {
        if(post.frontmatter.title === null || search.value.length === 0) return null;
        if(post.frontmatter.title.toLowerCase().includes(search.value.toLowerCase())) return post
        return null 
    }), [search.value])
    
    return (
       <>
            <div className="filter">
                {filteredPosts.length !== 0 ? 
                    <ul className="filter__dropdown" aria-label="dropdown">
                        {filteredPosts.map(post => 
                        <li key={post.id} className="filter__item">
                            <Link className="filter__button"  to={post.fields.slug}>
                                {post.frontmatter.title}
                            </Link>
                        </li>)}
                    </ul> 
                : null}
            </div>
        </>
    )
}


