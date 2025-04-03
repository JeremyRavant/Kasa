import React from "react";
import "./ApartmentCard.scss";

function Apartment(props) {
  return (
      <div className="apartment">
        <img src={props.cover} alt={props.title} />
        <div className="apartment__subtitle">{props.title}</div>
      </div>
  );
}

export default Apartment;
