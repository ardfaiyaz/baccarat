import React from "react";
import "./Card3.css";

function Card3() {
  const friends = [
    { name: "rune", avatar: "https://avatars.akamai.steamstatic.com/64da2f2cba47ea1ac5d89cb213e9cff2346ae2e3_full.jpg", status: "online" },
    { name: "Quan Faiyaz", avatar: "https://avatars.akamai.steamstatic.com/9b919940a6853f58cecba6f3a878bbf4b26c3818_full.jpg", status: "in-game" },
    { name: "andy", avatar: "https://avatars.akamai.steamstatic.com/6cb58756cd834427a2da77b6c82f3d5359233957_full.jpg", status: "offline" },
    { name: "Reveries", avatar: "https://avatars.akamai.steamstatic.com/4cca31d326b9706e3a204032a69378241be0edfc_full.jpg", status: "idle" },
    { name: "SINTO HUNTER", avatar: "https://avatars.akamai.steamstatic.com/e926d716355673e413b261428fc1f87463edd839_full.jpg", status: "in-game" },
    { name: "ETWOMAX", avatar: "https://avatars.akamai.steamstatic.com/387957a4c15140c4330a88098c191c6baa639e42_full.jpg", status: "idle" },
    { name: "exo!", avatar: "https://avatars.akamai.steamstatic.com/33479056c448c65922fbffbc646d7e1a751a5740_full.jpg", status: "offline" },
    { name: "luci", avatar: "https://avatars.akamai.steamstatic.com/05f00bdbedbaf0c33f5eab4fc32f796c4bbca987_full.jpg", status: "offline" },
  ];

  return (
    <div className="card3">
      <h3>Friends</h3>
      <div className="friend-list">
        {friends.map((f, i) => (
          <div className="friend-card" key={i}>
            <img src={f.avatar} alt={f.name} className="friend-avatar" />
            <div className="friend-info">
              <p className="friend-name">{f.name}</p>
              <span className={`status-text ${f.status}`}>{f.status}</span>
            </div>
            <span className={`status-dot ${f.status}`}></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card3;
