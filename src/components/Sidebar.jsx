import React from 'react'
import './Sidebar.css'
import SidebarItem from './utils/SidebarItem'

function Sidebar() {
  return (
    <div className='Sidebar'>
        <SidebarItem item='All' />
        <SidebarItem item='Read' />
        <SidebarItem item='Unread' />
    </div>
  )
}

export default Sidebar