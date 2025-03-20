import React from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src="./src/assets/logo.png" alt="logo kasa" />
        </div>
        <nav className='navigation'>
            <NavLink to = "/">Acceuil</NavLink>
            <NavLink to= "/About">A propos</NavLink>
        </nav>
    </div>
  )
}

export default Navbar