import { useParams } from "react-router-dom";
import Logements from "/db.json";
import ApartmentBanner from "../../components/ApartmentBanner";
import ApartmentHeader from "../../components/ApartmentHeader";
import DescriptionPanel from "../../components/DescriptionPanel";

function ApartmentPage() {
  const { id } = useParams();
  const apartment = Logements.find((logement) => logement.id === id);

  if (!apartment) {
    return <p>Problème d'id!</p>;
  }

  return (
    <div className="apartment-page">
      <ApartmentBanner pictures={apartment.pictures} />
      <ApartmentHeader apartment={apartment} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={apartment.description} />
        <DescriptionPanel title="Équipements" 
          content={apartment.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
