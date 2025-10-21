import React from 'react'
import './Header.css'
import icon from '../image/book.png';

function Header() {
  return (
    <div className='Header'>
        <div className='header-icon'>
          <img src={icon} alt='Library Icon' width='45px' height='35px' />
        </div>
        <h2 className='header-text'>Book Library</h2>
    </div>
  )
}

export default Header