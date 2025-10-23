import React from 'react';
import './Header.css';
import icon from '../image/book.png';

function Header() {
  return (
    <header className='Header'>
      <div className='header-icon'>
        <img src={icon} alt='Library Icon' />
      </div>
      <h1 className='header-text'>Book Library</h1>
    </header>
  );
}

export default Header;
