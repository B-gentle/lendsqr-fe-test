import React, { useState } from 'react';
import {  useAsyncDebounce } from 'react-table'
import { FaSearch } from 'react-icons/fa';
import './components.scss'

const GlobalSearch = ({filter, setFilter}) => {

  const [value, setValue] = useState(filter)

  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 2000)
  return (
    <span className='global-search'>
        <input type='text' placeholder='Search for anything' value={value || ''} onChange={(e)=>{setValue(e.target.value)
      onChange(e.target.value)}}/>
      <button><FaSearch/></button>
    </span>
  )
}

export default GlobalSearch