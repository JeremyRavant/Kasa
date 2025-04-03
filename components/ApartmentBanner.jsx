import React, { useState } from 'react'
import './ApartmentBanner.scss'

function ApartmentBanner(props) {

  const pictures = props.pictures

  const [currentPicture, setCurrentPicture] = useState(0)

  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  } 

  const moveToNext = () => {
    const newCurrentPicture = currentPicture + 1;
    if (newCurrentPicture >= pictures.length) {
        setCurrentPicture(0);
        return;
    }
    setCurrentPicture(newCurrentPicture);
};

const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
        setCurrentPicture(pictures.length - 1);
        return;
    }
    setCurrentPicture(newCurrentPicture);
};



  return (
    <div className='apartment__banner'>
        <div className='image__container'>
          {pictures.map((picture, i) => (<img key={picture} src={picture} alt="" className={getClassName(i)}></img>
          ))}      
      </div>
      <button className="btn btn-next" onClick={moveToNext}><i className='fas fa-chevron-right'></i></button>
      <button className="btn btn-previous" onClick={moveToPrevious}><i className='fas fa-chevron-left'></i></button>
    </div>
  )
}

export default ApartmentBanner