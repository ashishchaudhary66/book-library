import React from 'react'
import './SidebarItem.css'
import { useNavigate } from 'react-router-dom'

function SidebarItem({item}) {
    const navigate = useNavigate();
  return (
    <div className='SidebarItem' onClick={() => navigate(`/${item.route}`)}>
        {item.name}
    </div>
  )
}

export default SidebarItem