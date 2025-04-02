import React, { useState } from "react";
import "./DescriptionPanel.scss"


function DescriptionPanel(props) {

  const [isContentVisible, setIsContentVisible] = useState(false)
  const showContent = () => {
    setIsContentVisible(!isContentVisible)
  }
  const contentClass = `description__content ${isContentVisible ? "visible" : "hidden"}`;
  return (
    <div className='description__panel'>
        <p className='description__header' onClick={showContent}>
          <span>{props.title}</span>
          <span><i className={`fa-solid fa-chevron-down ${isContentVisible ? "rotated" : ""}`}></i></span>
        </p>
        <p className={contentClass}>{props.content}</p>
    </div>
  )
}

export default DescriptionPanel