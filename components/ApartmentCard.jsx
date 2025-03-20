import React from "react";
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";

function Apartment(props) {
  return (
    <Link to={`/apartment/${props.id}`}>
      <div className="apartment">
        <img src={props.cover} alt={props.title} />
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default Apartment;
