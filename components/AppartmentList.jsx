import React from 'react'
import "./AppartmentList.css"
import Appartment from './Appartment.jsx'

function AppatmentList() {
  return (
    <div className='list'>
      <Appartment />
      <Appartment />
      <Appartment />
      <Appartment />
    </div>
  )
}

export default AppatmentList