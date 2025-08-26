import React from "react";
import "./../profiles-css/Donaire.css";
import Card1 from "./donaire-cards/Card1";
import Card2 from "./donaire-cards/Card2";
import Card3 from "./donaire-cards/Card3";
import Card4 from "./donaire-cards/Card4";
import Card5 from "./donaire-cards/Card5";

function Donaire() {
  return (
    <div className="outer-container">
      <div className="main-container">
        <div className="top-row">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
        <div className="bottom-row">
          <Card4 />
          <Card5 />
        </div>
      </div>
    </div>
  );
}

export default Donaire;
