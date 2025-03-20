import React from 'react'
import './apartmentHeader.scss'

export default function AppartmentHeader(props) {

  const name = props.apartment.host.name
  const [firstName, lastName] = name.split(" ")


  return (
    <div className='apartment__header'>
    <div className='apartment__title'>
      <h1>{props.apartment.title}</h1>
      <h2>{props.apartment.location}</h2>
      <div className='apartment__tags'>
        {props.apartment.tags.map((tag) => (
          <span key={tag}>{tag}</span>
          ))}
      </div>
    </div>
    <div className='apartment__owner'>
      <div className='apartment__owner__details'>
        <h3><span>{firstName}</span> <span>{lastName}</span></h3>
        <div className='apartment__owner__badge'>
          <img src={props.apartment.host.picture} alt="" />
        </div>
      </div>
      <div className='apartment__owner__stars'>
          {[1, 2, 3, 4, 5].map ((num) => (
            <span className= {props.apartment.rating >= num ? "on" : ""} key={num}>★</span>
          ))}
      </div>
    </div>
  </div>
  )
}
