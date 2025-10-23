import React from 'react';
import './SidebarItem.css';
import { useNavigate, useLocation } from 'react-router-dom';

function SidebarItem({ item }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === `/${item.route}`;

  return (
    <div
      className={`SidebarItem ${isActive ? 'active' : ''}`}
      onClick={() => navigate(`/${item.route}`)}
    >
      {item.name}
    </div>
  );
}

export default SidebarItem;
