import React from "react";
import "./Card4.css";

const Card4 = () => {
  const stats = [
    { label: "Games Played", value: 218 },
    { label: "Total Duration", value: "1200 Hours" },
    { label: "Achievements", value: 28 },
    { label: "Longest Gaming Streak", value: "12 Days" },
    { label: "Favorite Game", value: "Valorant" },
    { label: "Friends", value: 54 },
  ];

  return (
    <div className="card4">
      <h3 className="card4-title">STATS</h3>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-block" key={index}>
            <p className="stat-label">{stat.label}</p>
            <strong className="stat-value">{stat.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card4;
