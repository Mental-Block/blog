import React from 'react'

import PreNavigation from "./PreNavigation"
import Navigation from "./Navigation"

export default function Menu() {
    return (
        <>
            <div className="menu">
                <PreNavigation />
                <Navigation />
            </div>
        </>
    )
}

