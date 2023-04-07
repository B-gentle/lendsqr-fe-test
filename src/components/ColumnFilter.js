import React from 'react'

const ColumnFilter = ({column}) => {
    const { filterValue, setFilter} = column
  return (
    <span>
        <input placeholder={`Search  ${column.Header}`} value={filterValue || ''} onChange={(e) => {setFilter(e.target.value || undefined)
        }}/>
    </span>
  ) 
}

export default ColumnFilter