import React from 'react'
import { customers, business, settings } from './sideNavList'
import { FaHome, FaAngleDown, FaBriefcase } from 'react-icons/fa';
import { MdOutlineLogout } from 'react-icons/md';
import '../../components/components.scss'

const SideNav = () => {
  return (
    <>
      <div className='nav-header-top'>
        <span><FaBriefcase/></span>
        <h5>Switch Organization <FaAngleDown /></h5>
      </div>
      <ul>
        <li>
          <span><FaHome /></span>
          <span>Dashboard</span>
        </li>

        <li>
          <span></span>
          <span>Customers</span>
          <ul>
            {customers && customers.map((customer, id) => <li key={id}>
              <span>{<customer.icon />}</span>
              <span>{customer.text}</span>
            </li>)}
          </ul>
        </li>

        <li>
          <span></span>
          <span>BUSINESSES</span>
          <ul>
            {business && business.map((item, id) => <li key={id}>
              <span>{<item.icon />}</span>
              <span>{item.text}</span>
            </li>)}
          </ul>
        </li>

        <li>
          <span></span>
          <span>SETTINGS</span>
          <ul>
          {settings && settings.map((setting, id) => <li key={id}>
          <span>{<setting.icon />}</span>
          <span>{setting.text}</span>
        </li>)}
          </ul>
        </li>

        <li>
          <span><MdOutlineLogout/></span>
          <span>Logout</span>
        </li>

      </ul >
    </>
  )
}

export default SideNav