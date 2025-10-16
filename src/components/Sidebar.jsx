import React from 'react'
import './Sidebar.css'
import SidebarItem from './utils/SidebarItem'

function Sidebar() {
    const sidebarItem = ["All", "Read", "Unread"]
  return (
    <div className='Sidebar'>
        {
            sidebarItem.map((item, index) => {
                return <SidebarItem key={index} item={item} />
            })
        }
    </div>
  )
}

export default Sidebar