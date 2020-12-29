import React from 'react'
import { Link } from "gatsby"

const NAV_LINKS = [
    { url: "/", value: "Home" },
    { url: "/portfolio", value: "Portfolio" },
    { url: "/about", value: "About" },
    { url: "/tags", value: "Tags" },
    { url: "/archive", value: "Archive" },
]

export default function Links({ ...props }) {
    if (!props.open) return null
    return (
        <div className="nav__container">
            {NAV_LINKS.map(({ url, value }, key) => {
                return <Link
                    key={key}
                    className="nav__link"
                    activeClassName="nav__link--active"
                    to={url}>
                    {value}
                </Link >
            })}
        </div >
    )
}
