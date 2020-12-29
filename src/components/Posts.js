import React from 'react'
import {Link} from "gatsby"

export default function Post({...props}) {

    return (
        <>
         <ol style={{ listStyle: `none` }}>
            {props.posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              return (
                <li key={post.fields.slug}>
                  <article
                    className="post"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <div className="space-between">
                        <p className="post__date"><small>{post.frontmatter.date}</small></p>
                        <p className="post__date"><small>{post.frontmatter.tag}</small></p>
                      </div>
                      <h2 className="post__title" itemProp="headline">{title}</h2>
                    </header>
                    <section>
                      <p className="post__paragraph"
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                        <Link className="link" to={post.fields.slug} itemProp="url">Read More...</Link>
                    </section>
                  </article>
                </li>
              )
            })}
          </ol>
        </>
    )
}
