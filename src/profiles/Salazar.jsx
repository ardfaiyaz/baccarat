import React from "react";
import "../profiles-css/Salazar.css";
import MaqDP from "./salazarhotpics/maqdp.jpg"; 

function Salazar( {}) {
  return (
    <div className="salazar-container">
      <div className="overlay"></div>

      <a href="/" className="return-button">Return</a>

      <div className="profile-content">

        <img
          src={MaqDP}
          alt="Profile"
          className="profile-pic"
        />

        <h1 className="gamer-name" style={{ color: "white" }}>Salazar</h1>
        <div className="tagdiv">
        <h2 className="tag">PRX</h2>
        </div>
        <div className="profile-tag-stats-wrapper">
          <div className="profile-tag">
            <span className="friendly-text">Friendly</span> | <span className="risktaker-text">RiskTaker</span>
          </div>

          <div className="stats-card">
            <h2>Stats & Achievements</h2>
            <div className="stats-achievements-grid">
              <div className="stats-column">
                <h3>Game: Valorant</h3>
                <ul>
                  <li>Kills: 250</li>
                  <li>Deaths: 120</li>
                  <li>Rank: Diamond</li>
                </ul>

                <h3>Game: Fortnite</h3>
                <ul>
                  <li>Wins: 45</li>
                  <li>Top 10: 120</li>
                  <li>Level: 75</li>
                </ul>
              </div>

              <div className="achievements-column">
                <h3>Game: Apex Legends</h3>
                <ul>
                  <li>Wins: 30</li>
                  <li>K/D Ratio: 2.3</li>
                  <li>Level: 60</li>
                </ul>

                <h3>Game: Minecraft</h3>
                <ul>
                  <li>Achievements: 45</li>
                  <li>Survival Days: 150</li>
                  <li>Level: 50</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="friends-sidebar">
        <div className="sidebar-wrapper">

          <div className="profile-settings">
            <h2>Profile Information</h2>
            <p>Age: 20</p>
            <p>Gender: Male</p>
            <p>Contact Number: 09186969101</p>
            <p>Nationality: Philippines</p>
          </div>

          <div className="sidebar-divider"></div>

          <div className="friends-section">
            <h2>Friends</h2>
            <ul>
              <li><span className="active-dot"></span> Melthon</li>
              <li><span className="active-dot"></span> Cj</li>
              <li><span className="active-dot"></span> Brieylee</li>
              <li><span className="active-dot"></span> Hero</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Salazar;
