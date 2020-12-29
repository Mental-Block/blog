import React from 'react'

import Layout from '../components/Layout'
import SEO from "../components/Seo"

export default function Legal() {
    return (
    <Layout>
        <SEO title="Legal Disclaimer" />
        <article>
          <header>
            <h1 className="header">
                Legal Disclaimer
            </h1> 
          </header>
          <section aria-label="disclaimer">
            <p className="paragraph__bold">
              You agree that the use of BadIdeasGuy.com is at your own risk. In no event will BadIdeasGuy.com be 
              liable for any direct or indirect trading or investment losses caused by any information available on this site. 
              Statements on this site are not guarantees of future performance and are subject to certain risks, 
              uncertainties and other factors.
            </p>
        
            <p className="paragraph__bold">
              The materials on the site are not an offer to sell or a solicitation of an offer to buy any security, 
              nor shall any security be offered or sold to any person, in any jurisdiction in which such offer would 
              be unlawful under the securities laws of such jurisdiction.
            </p>
            <p className="paragraph__bold">
              BadIdeasGuy.com makes no representations, and specifically disclaims all warranties, express, implied, 
              or statutory, regarding the accuracy, timeliness, or completeness of any material contained in this site. 
              You should seek the advice of a securities professional regarding your stock transactions.
            </p>
            <p className="paragraph__bold">
              BadIdeasGuy.com does not guarantee in any way that it is providing all of the information that may be available. 
              You must do your own due diligence before buying or selling any security.
            </p>
            <p className="paragraph__bold">
              The principals of BadIdeasGuy.com often hold a position in the securities profiled on the site. BadIdeasGuy.com will not
              report when a position is initiated or disposed of. Each investor must make that decision based on his/her judgment of the market. 
              BadIdeasGuy.com must never be relied upon in making investment decisions.
            </p>
          </section>
        </article>
      </Layout>
    )
}