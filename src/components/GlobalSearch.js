import React, {useState, useMemo} from 'react';
import { useTable, useGlobalFilter, useAsyncDebounce } from 'react-table'
import { COLUMNS } from './column';

const GlobalSearch = ({filter, setFilter}) => {

  const [value, setValue] = useState(filter)

  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 2000)
  return (
    <span>
        <input placeholder='Search' value={value || ''} onChange={(e)=>{setValue(e.target.value)
      onChange(e.target.value)}}/>
    </span>
  )
}

export default GlobalSearch