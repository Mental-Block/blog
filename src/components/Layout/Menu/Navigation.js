import React, { useState } from 'react'
import { Link } from "gatsby"

import Burger from "./Burger"
import Links from "./Links"

import Logo from "../../../../svg/logo.svg"

import useEvent from "../../../util/useEvent";

const PAGE_WIDTH = "960"
const EVENT = "resize"

export default function Navigation() {
    const [open, toggle] = useState(true);

    const forceToggle = () => {
        if (window.innerWidth >= PAGE_WIDTH) toggle(true);
    }

    useEvent(EVENT, forceToggle)

    return (
    <>
        <header>
            <nav className="nav" >
                <Link to="/">
                    <Logo alt="Logo"/>
                </Link>
                <Links open={open} />
                <Burger open={open} toggle={() => toggle(!open)} />
            </nav>
        </header>
    </>
    )
}