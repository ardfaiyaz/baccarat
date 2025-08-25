import React from "react";
import "./Card2.css";

function Card2() {
  const ign = "Ard The Nigger Faiyaz";
  const level = 99;
  const bio =
    "skibidi gyatt rizz only in ohio duke dennis did you pray today livvy dunne rizzing up baby gronk sussy imposter pibby glitch in real life sigma alpha omega male grindset andrew tate goon cave freddy fazbear colleen ballinger smurf cat vs strawberry elephant blud dawg shmlawg ishowspeed a whole bunch of turbulence ambatukam";

  return (
    <div className="card-container">
      <div className="pfp-box">
        <img
          src="https://images.plex.tv/photo?size=large-1920&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FwhvbNyXLZpoZfFqeeMJMBRcm3qg.jpg"
          alt="pfp"
        />
      </div>

      <div className="ign-level-row">
        <div className="ign-section">
          <p className="ign-label">IGN</p>
          <p className="ign-name">{ign}</p>
        </div>
        <p className="level">Level {level}</p>
      </div>
      <p className="bio">{bio}</p>
    </div>
  );
}

export default Card2;
