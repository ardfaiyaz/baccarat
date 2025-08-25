import React from "react";
import "./Card5.css";

function Card5() {
  const achievements = [
    { icon: "🎯", title: "Ascendant", description: "Reached Ascendant rank in Valorant" },
    { icon: "🔥", title: "Mythical Immortal", description: "Achieved Mythical Immortal in MLBB" },
    { icon: "🏆", title: "WINNER !", description: "Won the 2025 MLBB Tournament" },
    { icon: "💎", title: "UR Erii", description: "I turned Erii into UR in Dragon Raja, took me months to farm mats." }
  ];

  return (
    <div className="card5">
      <h3>Recent Achievements</h3>
      <div className="achievements-grid">
        {achievements.map((ach, index) => (
          <div className="achievement" key={index}>
            <div className="icon">{ach.icon}</div>
            <h4>{ach.title}</h4>
            <p>{ach.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card5;
