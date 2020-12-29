import React from 'react'
import { Link } from "gatsby"

const PRE_NAV_LINKS = [
    { url: "/contact", value: "Contact" },
    { url: "/legal", value: "Legal" },
]

export default function PreNavigation() {
    return (
        <div className="pre__nav">
            <div className="pre__nav__container">
                {PRE_NAV_LINKS.map(({ url, value }, key) => (
                    <Link
                        activeClassName="pre__nav__link--active"
                        className="pre__nav__link"
                        key={key}
                        to={url}>
                        {value}
                    </Link>
                ))}
            </div >
        </div >

    )
}