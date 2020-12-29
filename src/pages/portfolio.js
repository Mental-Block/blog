import React from "react";

import Layout from '../components/Layout'
import SEO from "../components/Seo"
import ChartWithData from "../components/ChartWithData"

export default function Portfolio() {
    return (
    <Layout layoutType="blog" >
        <SEO title="Portfolio" />
        <article>
            <header>
              <h1 className="header">Portfolio Performance</h1>  
            </header>
            <section aria-label="goals">
                <h2 className="sub__header__2">I have three investing goals</h2>
                <ul className="list">
                    <li>1) Beat the market (S&P 500 ETF SPY)</li>
                    <li>2) Try to get and maintain a 26% CAGR</li>
                    <li>3) Not blow up</li>
                </ul>
            </section>
            <section aria-label="rules">
                <p className="paragraph">The performance I quote here is my real portfolio performance and this is my entire investable portfolio. 
                    This includes my TFSA, RRSP and standard brokerage account. All return figures are recored annually after tax. 
                    I do not purchase bitcoin, gold, etc, mutual funds or ETF’s and rarely hold cash. 
                </p>
                <p className="paragraph">
                    I started investing March 26 2020. We’ll soon see if I am cut out for being a capable 
                    investor or just another market speculator. As Warren Buffet puts it “Only when the tide goes out do you discover 
                    who’s been swimming naked.”
                </p>
            </section>
            <section aria-label="proformace">
                <header>
                   <h2 className="sub__header__2">My performance since buying my first stock</h2> 
                </header>
                <ChartWithData />
            </section>
        </article>
      </Layout>
    )
}
