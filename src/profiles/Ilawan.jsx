import React from "react";
import "../profiles-css/Ilawan.css";

function Ilawan({ username }) {
  return (
    <div className="ilawan-container">
      <h1>🔥 Ilawan Gaming Profile 🔥</h1>
      <p>Welcome, {username}!</p>
      <p>Specialized in MOBA strategies and high APM plays!</p>
    </div>
  );
}

export default Ilawan;
