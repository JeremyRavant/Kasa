import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src="./src/assets/logo.png" alt="logo kasa" />
        </div>
        <nav className='navigation'>
            <a href="">Acceuil</a>
            <a href="">A propos</a>
        </nav>
    </div>
  )
}

export default Navbar