import React from 'react'

export default function Burger({ ...props }) {
    const ChangeColor = !props.open ? "nav__burger__line" : "nav__burger__line--active"

    return (
        <>
            <button className="nav__burger" onClick={props.toggle} type="button" aria-label="menu">
                <span className="btn__content" tabIndex="-1">
                    <div className={ChangeColor} />
                    <div className={ChangeColor} />
                    <div className={ChangeColor} />
                </span>
            </button>
        </>
    )
}
