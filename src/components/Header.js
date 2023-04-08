import React from 'react'
import logo from '../assets/logo.svg'
import ade from '../assets/adedeji.png'
import GlobalSearch from './GlobalSearch'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FaAngleDown } from 'react-icons/fa'
import './components.scss';


const Header = ({ filter, setFilter }) => {
  return (
    <header>
      <img src={logo} alt='logo-header' />
      <div>
        <GlobalSearch filter={filter} setFilter={setFilter} />
        <span>
        <span>Docs</span>
        <IoMdNotificationsOutline />
        <img className='header-avatar' src={ade} alt='ade-png' />
        <span>Adedeji</span>
        <FaAngleDown />
        </span>
        
      </div>
    </header>
  )
}

export default Header