import React from "react";
import "../profiles-css/Umipon.css";

function Umipon({ username }) {
  return (
    <div className="umipon-container">
      <h1>⚡ Umipon Gaming Zone ⚡</h1>
      <p>Welcome, {username}!</p>
      <p>FPS master with insane headshot accuracy!</p>
    </div>
  );
}

export default Umipon;
