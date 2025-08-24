import React from "react";
import "../profiles-css/Salazar.css";

function Salazar({ username }) {
  return (
    <div className="salazar-container">
      <h1>🛡️ Salazar Gaming Realm 🛡️</h1>
      <p>Welcome, {username}!</p>
      <p>Legendary strategist, feared and respected across all arenas.</p>
    </div>
  );
}

export default Salazar;
