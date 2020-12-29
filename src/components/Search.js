import React, {useContext} from 'react'

import SearchContext from "../context/SearchContext" 

import MagGlassIcon from "../../svg/search.svg"


export default function Search({name, ...rest}) {
    const {search, setSearch} = useContext(SearchContext)

    const handleChange = (event) => {
        event.preventDefault();
        setSearch({value : event.target.value});
    }

    return (
        <>
            <div className="search">
                <div className="input__control">
                    <label htmlFor={name} >
                        <input value={search.value} onChange={(event) => handleChange(event)} className="input" id={name} aria-label={name} name={name} {...rest}/>
                    </label> 
                    <MagGlassIcon />
                </div>
            </div>
        </>
    )
}