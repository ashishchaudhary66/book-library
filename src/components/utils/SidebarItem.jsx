import React from 'react'
import './SidebarItem.css'

function SidebarItem({item}) {
    
  return (
    <div className='SidebarItem'>
        {item}
    </div>
  )
}

export default SidebarItem