import React, {useState} from 'react'
import { useTable, useGlobalFilter } from 'react-table'

import MagGlassIcon from "../../svg/search.svg"

export default function Table({ columns, data }) {
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
      } = useTable(
        {
          columns,
          data,
        },
        useGlobalFilter
      )

      
        return (<>
                 <GlobalFilter
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
                <table className="table" {...getTableProps()}>
                    <thead >
                    {headerGroups.map(headerGroup => (
                        <tr className="table__tr" {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th className="table__th" {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)
                        return (
                            
                            <tr id={i} className="table__tr" {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                return <td className="table__td" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        
                        )
                    })}
                    </tbody>
                </table>
            </>
        )
}

function GlobalFilter({
  globalFilter,
  setGlobalFilter,
}) {

  const [value, setValue] = useState(globalFilter)
  const onChange = async value => {
    setGlobalFilter(value || undefined)
  }

  
  return (
    <div className="search">
        <div className="input__control">
            <label htmlFor="searchTable" >
                <input value={value || ""} 
                        onChange={e => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }} 
                    className="input" 
                    id="searchTable" 
                    aria-label="searchTable"
                    name="searchTable"
                    placeholder="date, title & etc.."
                />
            </label> 
            <MagGlassIcon />
        </div>
    </div>
  )
}

