import React from "react";
import "../profiles-css/Donaire.css";

function Donaire({ username }) {
  return (
    <div className="donaire-container">
      <h1>🎮 Donaire Gaming Hub 🎮</h1>
      <p>Welcome, {username}!</p>
      <p>Known for clutch plays and game-winning decisions!</p>
    </div>
  );
}

export default Donaire;
