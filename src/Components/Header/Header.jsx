import React from 'react'
import './Header.scss'
import 'boxicons'

const Header = () => {
  return (
    <>
      <header>
        <h1 className="logo">QR8</h1>
        <div className="search-bar">
          <input type="search" placeholder="Search" />
          <button className='search-button'>
            <box-icon
              name="search"
              type="regular"
              color="#000"
              size="sm"
            ></box-icon>
          </button>
        </div>
        <div className="header-icons">
          <button className='nottie-bell'>
            <box-icon
              name="bell"
              type="regular"
              color="#000"
              size="sm"
              animation="tada-hover"
            ></box-icon>
          </button>
          <button className='user-profile'>
            <box-icon
              name="user-circle"
              type="solid"
              color="#000"
              size="md"
            ></box-icon>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header