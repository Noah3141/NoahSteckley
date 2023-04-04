import React from "react";
import GuestDrinks from "../../../images/GuestDrinks.png";
import DistDrinks from "../../../images/DistDrinks.png";
import PartyDrinks from "../../../images/PartyDrinks.png";

function AlcoholConsumption() {
  return (
    <div className="container">
      <h2>Alcohol Consumption Rates at Large Events</h2>
      <img className="img" src={GuestDrinks} alt="Drinks per Guest" />
      <img className="img" src={DistDrinks} alt="Drinks per Guest" />
      <img className="img" src={PartyDrinks} alt="Drinks per Guest" />
    </div>
  );
}

export default AlcoholConsumption;
