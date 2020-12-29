import React from 'react'

import SearchContextProvider from "../../context/SearchContextProvider"

import Search from "../Search"
import RecentPost from "../RecentPost"
import Tags from "../Tags"
import Subscribe from "../Subscribe"

import SearchPosts from '../SearchPosts'

const ASIDE = [
{
    title: "Recent Post",
    Component: RecentPost
},
{
    title: "Tags",
    Component: Tags
},
{
    title: "Follow By Email",
    Component: Subscribe
}
]

export default function Aside() {
    return (
        <aside className="aside">
            <section className="aside__section">
                <h2 className="sub__header">Search Posts</h2>
                <SearchContextProvider>
                    <div className="aside__search">
                      <Search name="search" type="text" placeholder="Search Post..." />
                      <SearchPosts />
                    </div>
                </SearchContextProvider>
              </section>  
            {ASIDE.map(({title, Component}) => (
              <section key={title} className="aside__section">
                <h2 className="sub__header">{title}</h2>
                    <Component />
              </section>  
            ))}
        </aside>
    )
}