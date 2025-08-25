import React from "react";
import "./Card4.css";

function Card4() {
  const badges = ["MVP 2024", "Top Scorer", "Speed Runner"];
  return (
    <div className="card4">
      <h3>Achievements</h3>
      <ul>
        {badges.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}

export default Card4;
