import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className='footer'>
        <div className='footerLogo'>
        <img src="../src/assets/logoFooter.png" alt="" />
        </div>
        <div className='footerText'>
        <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer