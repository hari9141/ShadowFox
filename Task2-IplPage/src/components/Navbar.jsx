import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/src/assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar" role="navigation" aria-label="main-navigation">
      <div className="nav-left">
        <NavLink to="/" onClick={closeMenu}>
          <img className="logo" src={logo} alt="RCB logo" />
        </NavLink>
      </div>

      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className={`nav-links ${isOpen ? 'active' : ''}`} aria-label="Primary">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink>
        <NavLink to="/men" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>RCB Men</NavLink>
        <NavLink to="/women" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>RCB Women</NavLink>
        <NavLink to="/tv" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>RCBTV</NavLink>
        <NavLink to="/news" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>News</NavLink>
        <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Gallery</NavLink>
        <NavLink to="/glories" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Glories</NavLink>
        <NavLink to="/statistics" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Statistics</NavLink>
      </nav>
    </header>
  )
}
