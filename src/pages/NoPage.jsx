import React from 'react'
import { Link } from 'react-router-dom'
import './NoPage.scss'


function NoPage() {
  return (
    <div className='error-page'>
      <h1>404</h1>
      <h2>Oops! la page que vous demandez n'existe pas.</h2>
      <Link to="/">retourner sur la page d'acceuil</Link>
    </div>
  )
}

export default NoPage