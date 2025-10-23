import React from 'react';
import './Sidebar.css';
import SidebarItem from './utils/SidebarItem';

function Sidebar() {
  const sidebarItem = [
    { route: "all", name: "All" },
    { route: "read", name: "Read" },
    { route: "unread", name: "Unread" },
    { route: "addbook", name: "Add Book" }
  ];

  return (
    <div className='Sidebar'>
      {sidebarItem.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Sidebar;
