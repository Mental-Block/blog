import React from "react"

import Footer from "./Footer"
import Menu from "./Menu"
import Aside from "./Aside"

export default function Layout({ children, layoutType }){
    return (
      <div className="page__wrapper">
        <Menu />
        <div className="page__wrapper__outer">
          <main className="page__wrapper__inner">
            {children}
          </main>
          {layoutType === "blog" ? <Aside /> : null}
        </div>
        <Footer />
      </div>
    )
}


