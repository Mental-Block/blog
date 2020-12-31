import React, {useMemo, } from 'react'
import {useStaticQuery, graphql, Link} from "gatsby"

import Table from "./Table"

export default function TableWithData() {
    const {allMarkdownRemark} = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                nodes {
                    id
                    frontmatter {
                        tag
                        title
                        date
                        filterType
                        }
                    fields {
                        slug
                    }
                }
            }
        }
    `);

    const posts = allMarkdownRemark.nodes
       
        const data = useMemo(() =>
            posts.map((post) => {
            const title = post.frontmatter.title
            const date = post.frontmatter.date.slice(0, 10)
            const filterType = post.frontmatter.filterType
            const tickersymbol = post.frontmatter.tag
            
            return { title, date, tickersymbol, filterType }
        }), [posts])
    

    const columns = useMemo(
        () => [
          {
            Header: 'Posts',
            columns: [
                {
                Header: 'Title',
                accessor: 'title',
                Cell: ({ cell: { value }, row }) => <Link className="link" to={posts[row.id].fields.slug}>{value}</Link>
              },
              {
                Header: 'Date',
                accessor: 'date',
              },
              {
                Header: 'Ticker Symbol',
                accessor: 'tickersymbol',
              },
              {
                Header: 'Research Type',
                accessor: 'filterType',
              },
            ],
          },
        ],
        [posts]
      )        

    return <Table columns={columns} data={data} />
}