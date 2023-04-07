import React from 'react'
import { customers, business, settings } from './sideNavList'
import { FaHome } from 'react-icons/fa'

const SideNav = () => {
  return (
    <>
      <div>
        <span></span>
        <h4>Switch Organization</h4>
      </div>
      <ul>
        <li>
          <span><FaHome /></span>
          <span>Dashboard</span>
        </li>

        <li>
          <span></span>
          <span>Customers</span>
        </li>

        {customers && customers.map((customer, id) => <li key={id}>
          <span>{<customer.icon/>}</span>
          <span>{customer.text}</span>
        </li>)}

        <li>
          <span></span>
          <span>BUSINESSES</span>
        </li>

        {business && business.map((item, id) => <li key={id}>
          <span>{<item.icon/>}</span>
          <span>{item.text}</span>
        </li>)}

        <li>
          <span></span>
          <span>SETTINGS</span>
        </li>

        {settings && settings.map((setting, id) => <li key={id}>
          <span>{<setting.icon/>}</span>
          <span>{setting.text}</span>
        </li>)}
      </ul>
    </>
  )
}

export default SideNav