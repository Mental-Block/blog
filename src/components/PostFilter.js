import React, { useReducer, useState } from 'react'

import DownArrow from "../../svg/down.svg"

import Posts from "../components/Posts"

const ACTION = {
   GENERAL_MARKET: "general market",
   REPORTS: "reports",
   UPDATES: "updates",
   DEFAULT: "default"
}

const FILTER_VALUES = [
    { value: "Default", type: ACTION.DEFAULT},
    { value: "General Market", type: ACTION.GENERAL_MARKET},
    { value: "Reports", type: ACTION.REPORTS},
    { value: "Updates", type: ACTION.UPDATES}
]
  
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION.DEFAULT : return {value: "Default", posts: action.payload} 
      case ACTION.GENERAL_MARKET : return {value: "General Market", posts: action.payload.filter(post => post.frontmatter.filterType === "General Market")}
      case ACTION.REPORTS : return {value: "Reports", posts: action.payload.filter(post => post.frontmatter.filterType === "Reports")} 
      case ACTION.UPDATES : return {value: "Updates", posts: action.payload.filter(post => post.frontmatter.filterType === "Updates")} 
      default: return state;
    }
  }

export default function PostFilter({...props}) {
     const [open, toggle] = useState(false);
     const [state, dispatch] = useReducer(reducer, {value: "Default", posts: props.posts})
     

    return (
        <>
            <div className="left">     
                <div className="filter">
                    <button className="dropdown__button" onClick={() => toggle(!open)} aria-label="post filter" type="button" >
                        <span className="btn__content" tabIndex="-1">
                            Post Filter
                            <DownArrow />
                        </span>
                    </button>
                    {open ?
                        <ul className="filter__dropdown" aria-label="dropdown">
                            {FILTER_VALUES.map(({ value, type }, key) => (
                                <li className="filter__item" key={key}>
                                    <button 
                                        onClick={() => dispatch({type, payload: props.posts}) } 
                                        className={state.value === value ? "filter__button filter__button--active" : "filter__button"}> 
                                        <span className="btn__content" tabIndex="-1">
                                            {value}
                                        </span>  
                                    </button>
                                </li>
                            ))}
                        </ul> : null}
                </div> 
            </div>
            <Posts posts={state.posts}/> 
        </>
    )
}

