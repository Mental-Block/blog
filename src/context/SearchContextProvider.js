import React, {useState} from 'react'

import SearchContext from "./SearchContext"

export default function SearchContextProvider({children}){
    const [search, setSearch] = useState({value: ""});
    return(
      <SearchContext.Provider value={{search, setSearch}}>
        {children}
      </SearchContext.Provider>
    )
  }