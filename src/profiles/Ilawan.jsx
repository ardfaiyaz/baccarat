import React from "react";
import "../profiles-css/Ilawan.css";
import Card from "../ilawancard/Card.jsx";

function Ilawan() {
  return (
    <div className="ilawan-wrapper">
      {/* Header Section */}
      <div className="ilawan-header">
        <div className="ilawan-profile-section">
          {/* PROFILE PICTURE with custom image */}
          <div
            className="ilawan-profile-picture"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/ed/71/37/ed71377f45887fb8fed985e7a3769b91.jpg')" }}
          ></div>

          <div className="ilawan-user-info">
            <h2 className="username">rune</h2>
            <div className="user-location">
              <img
                src="https://flagcdn.com/w20/ph.png"
                alt="Philippines Flag"
                className="flag-icon"
              />
              <span>Philippines</span>
            </div>
          </div>
        </div>

        <div className="ilawan-level">
          <div className="level-circle">100</div>
          <span className="level-label">Level</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="ilawan-main">
        {/* Left: Recent Activity */}
        <div className="ilawan-left">
          <div className="ilawan-section-title">
            <h3>Recent Activity</h3>
            <span>3,000+ hours past 2 weeks</span>
          </div>

          {[
            {
              title: "Umamusume: Pretty Derby",
              desc: "5,315 hrs on record · Last played on 13 Aug",
              img: "https://play-lh.googleusercontent.com/DRLSq9EkBBHQS77fGQv7vL1EH6a8ABLbRaqc6MIQf-XBDvmX9SBnkoEVEMHEyPqEbQiZ",
            },
            {
              title: "R.E.P.O.",
              desc: "1,230 hrs on record · Last played on 21 Jul",
              img: "https://images.g2a.com/323x433/1x1x1/repo-p10000510013/33d5982d7aca4b5ebffc8f63",
            },
            {
              title: "Blue Archive",
              desc: "860 hrs on record · Last played on 7 Jul",
              img: "https://play-lh.googleusercontent.com/g8Pdqd0jxo14ZKobgelauvnIc3WvBjYVm_WQRFyS3JBZiZmADCHHojqhueyg_lxyNXDY",
            },
            {
              title: "Grand Theft Auto V",
              desc: "2,475 hrs on record · Last played on 20 Aug",
              img: "https://static.vecteezy.com/system/resources/thumbnails/027/127/540/small_2x/grand-theft-auto-gta-v-logo-grand-theft-auto-gta-v-icon-transparent-free-png.png",
            },
            {
              title: "Left 4 Dead 2",
              desc: "1,950 hrs on record · Last played on 18 Aug",
              img: "https://images.dwncdn.net/images/t_app-icon-l/p/d6084a2c-2abb-413a-80a7-630625bc7afc/3984578995/l4d2-left-4-dead-2-mobile-logo",
            },
          ].map(({ title, desc, img }, i) => (
            <Card key={i}>
              <div className="ilawan-game-card">
                <div
                  className="ilawan-game-img"
                  style={{ backgroundImage: `url('${img}')` }}
                ></div>
                <div className="ilawan-game-info">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Right: Friends List */}
        <div className="ilawan-right">
          <Card title="Currently Online">
            <div className="ilawan-friends-list">
              {[
                {
                  name: "Cry",
                  status: "Last Online 1 hrs, 7 mins ago",
                  level: 36,
                  img: "https://i.pinimg.com/736x/73/b0/ff/73b0ffd592cdd81598f086ce8d182205.jpg",
                },
                {
                  name: "ETWOMAX",
                  status: "Last Online 17 days ago",
                  level: 13,
                  img: "https://i.pinimg.com/736x/cf/7f/59/cf7f5989fd14d2944e1b8886f68542e9.jpg",
                },
                {
                  name: "Nein",
                  status: "Last Online 7 hrs, 35 mins ago",
                  level: 7,
                  img: "https://i.pinimg.com/736x/12/08/b2/1208b220ceab3eb4a94c9f42e1a8bed1.jpg",
                },
                {
                  name: "Ryo",
                  status: "Online",
                  level: 6,
                  img: "https://i.pinimg.com/736x/b2/bf/c3/b2bfc3766a96f9d1b2517475cd8c8c58.jpg",
                },
                {
                  name: "Quan Faiyaz",
                  status: "Last Online 191 days ago",
                  level: 4,
                  img: "https://i.pinimg.com/1200x/01/96/a1/0196a1788c4ce7bd23f5a7491dbe469b.jpg",
                },
                {
                  name: "Doku毒",
                  status: "Last Online 6 hrs, 24 mins ago",
                  level: 4,
                  img: "https://i.pinimg.com/736x/eb/4b/a4/eb4ba47aaf2997026a98fbe955d7ea96.jpg",
                },
              ].map(({ name, status, level, img }, i) => (
                <div className="ilawan-friend" key={i}>
                  <div
                    className="friend-avatar"
                    style={{ backgroundImage: `url('${img}')` }}
                  ></div>
                  <div className="friend-info">
                    <p className="friend-name">{name}</p>
                    <p
                      className={`friend-status ${
                        status === "Online" ? "online" : ""
                      }`}
                    >
                      {status}
                    </p>
                  </div>
                  <div className="friend-level">{level}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Ilawan;
