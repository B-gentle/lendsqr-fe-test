import React from 'react'
import logo from '../assets/logo.svg'
import GlobalSearch from './GlobalSearch'
import {IoMdNotificationsOutline} from 'react-icons/io'


const Header = ({filter, setFilter}) => {
  return (
    <header>
        <img src={logo} alt='logo-header'/>
        <GlobalSearch filter={filter} setFilter={setFilter} />
        <span>Docs</span>
        <IoMdNotificationsOutline/>
        </header>
  )
}

export default Header