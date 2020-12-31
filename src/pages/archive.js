import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

import TableWithData from "../components/TableWithData"

export default function archive() {
    return (
        <Layout>
            <SEO title="Archive" />
              <section aria-label="search">
                <h2 className="sub__header">Search</h2>
                <TableWithData />
                <p aria-label="error message" className="table__error"></p>
              </section>
        </Layout>
    )
}