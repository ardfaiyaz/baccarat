import React from "react";
import "../profiles-css/Buta.css";

function Buta({ username }) {
  return (
    <div className="buta-container">
      <h1>🐗 Buta Gaming Den 🐗</h1>
      <p>Welcome, {username}!</p>
      <p>Tactical genius, outsmarting every opponent on the field!</p>
    </div>
  );
}

export default Buta;
