import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import SEO from "../components/Seo"

export default function about() {
    return (
        <Layout>
            <SEO title="About"/>
            <article>
                <header>
                    <h1 className="header center">
                        About Me
                    </h1> 
                </header>
                <section aria-label="about">
                    <p className="paragraph">
                        I am a value investor that looks at nano and microcaps. I know that term value investor is a bit generic but what 
                        I like to do is mostly balance sheet investing and deep value but sometimes all also throw in some GARP if get growth 
                        for a value price. I think my edge in doing this kind of space is turning over a lot of rocks, contranism, and focus. 
                    </p>
                    <p className="paragraph">
                        I first got into the financial markets by accidentally stumbling upon Kiyosaki’s “Rich Dad, Poor Dad” book in the library 
                        the title intrigued me so I read it. Since then I have consumed numerous amounts of financial information reading 
                        Buffet’s letters, Greenblatt’s books and many others. I continue to read books and am starting to listen to more 
                        financial related podcast. My favourite at the moment is Value After Hours by the Aquires Podcast.
                    </p>
                    <p className="paragraph">
                        I am a full-time construction labour living in the Ottawa region. If I’m not looking at potential investments 
                        or working. I'm writing code or learning more technologies and  a little bit of blogging as well. Hopefully, one 
                        day all switch my current job to a software job were all have time to look at more oppertunites.
                    </p>
                    <p className="paragraph">
                        I have created this blog to improve and document my investing process and skill. The reason I am 
                        making the public is to get other investors feed back so I can improve my process and help others out 
                        along they way on their journey. 
                    </p>
                    <p className="paragraph">
                        If you want to know more about me just ask, <Link className="link" to="/contact">contact link</Link>
                    </p>
                    <p className="paragraph">
                        -- Aaron Tibben
                    </p>
                </section>
            </article>
        </Layout>
    )
}
