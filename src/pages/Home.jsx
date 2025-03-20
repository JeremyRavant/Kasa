import React from "react";
import Logements from '/db.json'
import Apartment from "../../components/ApartmentCard";
import '../pages/Home.scss'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="list">
        {Logements.map((logement) => (
          <Link key={logement.id} to={`/apartment/${logement.id}`}>
            <Apartment {...logement} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
