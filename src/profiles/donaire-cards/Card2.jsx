import React from "react";
import "./Card2.css";

function Card2() {
  const ign = "Ard Faiyaz";
  const tag = "PRX";
  const level = 99;
  const bio =
    "skibidi gyatt rizz only in ohio duke dennis did you pray today livvy dunne rizzing up baby gronk sussy imposter pibby glitch in real life sigma alpha omega male grindset andrew tate goon cave freddyskibidi gyatt rizz only in ohio duke dennis did you pray today livvy dunne rizzing up  class not the mosquito again bussing axel in harlem ";

  return (
    <div className="card-container">
      <div className="pfp-box">
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTh6a3VucnRqdXRneDdyNDBpbTB2c2E4cXhsMGhkZGxubTk5cjRoeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/oJjxexthHrPbi/giphy.gif"
          alt="pfp"
        />
      </div>

      <div className="ign-level-row">
        <div className="ign-section">
          <p className="ign-label">IGN</p>
          <p className="ign-name">{ign}</p>
          <p className="tag">{tag}</p>
        </div>
        <p className="level">Level {level}</p>
      </div>
      <p className="bio">{bio}</p>
    </div>
  );
}

export default Card2;
