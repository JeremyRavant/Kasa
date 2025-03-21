import React from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'
import logo from '../src/assets/logo.png'


function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt="logo kasa" />
        </div>
        <nav className='navigation'>
            <NavLink to = "/">Accueil</NavLink>
            <NavLink to= "/About">A propos</NavLink>
        </nav>
    </div>
  )
}

export default Navbar