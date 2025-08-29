import React from "react";
import "../profiles-css/Umipon.css";

const Card = ({ children, className }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

const Umipon = () => {
  return (
  <div className="background-container">
    <div className="dashboard">
      {}
      <nav className="navbar">
        <div className="logo">
          <div className="namee">Leentik</div>
          <div className="tag">PRX</div>
        </div>
      
        <ul className="nav-links">
          <li>Home</li>
          <li>Store</li>
          <li>Library</li>
          <li>Achievments</li>
          <li>Events</li>
          <li>Settings</li>
        </ul>
        <div className="profile">
          <input type="text" placeholder="Search..." className="search" />
          <img
          src="https://i.pinimg.com/1200x/16/72/b1/1672b16e834c943cc988f904c349f9df.jpg" 
          alt="Profile"
          className="avatar"
          />
        </div>
      </nav>

      <div className="content">
        {}
        <Card className="hero">
          <img
            src="https://uploads.jovemnerd.com.br/wp-content/uploads/2020/12/valorant-ep1-ato3-publi.jpg?ims=1210x544/filters:quality(75)"
            alt="Valorant"
            className="hero-img"
          />
          <div className="hero-text">
            <h2>Valorant</h2>
            <p>
              VALORANT — A 5v5 tactical shooter featuring agents with unique abilities.
            </p>
            <button className="read-btn">PLAY NOW</button>
          </div>
        </Card>

        {}
        <div className="sidebar">
          <Card className="friends-card">
  <h3>Friends</h3>
  <ul className="friends-list">
    <li>
      <img
        src="https://i.pinimg.com/736x/0b/dd/c1/0bddc1564f428b8c140d2a43b6e69ba5.jpg"
        alt="Alex"
        className="friend-avatar"
      />
      <div className="friend-details">
        <span className="friend-name">Ard Faiyaz</span>
        <span className="friend-status online">Online</span>
      </div>
      <span className="status online"></span>
    </li>

    <li>
      <img
        src="https://i.pinimg.com/736x/04/06/4f/04064f41ce7c843e0a1b84b6f4e446e6.jpg"
        alt="Mia"
        className="friend-avatar"
      />
      <div className="friend-details">
        <span className="friend-name">Rune</span>
        <span className="friend-status ingame">In Game</span>
      </div>
      <span className="status ingame"></span>
    </li>

    <li>
      <img
        src="https://i.pinimg.com/736x/85/9d/f6/859df674c5e5fe3d328619d28170876e.jpg"
        alt="Jake"
        className="friend-avatar"
      />
      <div className="friend-details">
        <span className="friend-name">Quan Faiyaz</span>
        <span className="friend-status idle">Idle</span>
      </div>
      <span className="status idle"></span>
    </li>

    <li>
      <img
        src="https://avatars.akamai.steamstatic.com/387957a4c15140c4330a88098c191c6baa639e42_full.jpg"
        alt="Sophie"
        className="friend-avatar"
      />
      <div className="friend-details">
        <span className="friend-name">SKAMOTE</span>
        <span className="friend-status ingame">In Game</span>
      </div>
      <span className="status ingame"></span>
    </li>

    <li>
      <img
        src="https://i.pinimg.com/736x/5a/f0/59/5af059db9cad656436167a77b3e31459.jpg"
        alt="Sophie"
        className="friend-avatar"
      />
      <div className="friend-details">
        <span className="friend-name">strwbrei</span>
        <span className="friend-status idle">Idle</span>
      </div>
      <span className="status idle"></span>
    </li>

    <li>
      <img
        src="https://i.pinimg.com/1200x/65/6b/a6/656ba6b581717ee5ef636b9502c04dd0.jpg"
        alt="Sophie"
        className="friend-avatar"
      />
      <div className="friend-details">
        <span className="friend-name">E2MAX</span>
        <span className="friend-status online">Online</span>
      </div>
      <span className="status online"></span>
    </li>

    <li>
      <img
        src="https://avatars.akamai.steamstatic.com/e926d716355673e413b261428fc1f87463edd839_full.jpg"
        alt="Sophie"
        className="friend-avatar"
      />
      <div className="friend-details">
        <span className="friend-name">Sinto Hunter</span>
        <span className="friend-status offline">Offline</span>
      </div>
      <span className="status offline"></span>
    </li>
  </ul>
</Card>

          <Card className="achievements-card">
    <h3>Achievements</h3>
    <ul className="achievements-list">
      <li>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jtdcu96cOQ8wmNMPN-ylEbX5a015iAfbpg&s"
          alt="TOP 1 BATTLE ROYALE"
          className="achievement-icon"
        />
        <span>TOP 1 BATTLE ROYALE</span>
      </li>
      <li>
        <img
          src="https://avatars.githubusercontent.com/u/77490730?v=4"
          alt="WINNER WINNER CHICKEN DINNER"
          className="achievement-icon"
        />
        <span>WINNER WINNER CHICKEN DINNER</span>
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3857/3857421.png"
          alt="KILLED 100 ENEMIES"
          className="achievement-icon"
        />
        <span>KILLED 100 ENEMIES</span>
      </li>
      <li>
        <img
          src="https://media.istockphoto.com/id/1417650698/vector/campfire-symbol-bonfire-vector-icon.jpg?s=612x612&w=0&k=20&c=EGfQ_j0ETq705RL7ftj6wjZ7gWw3SclakRYIcAGx1Gk="
          alt="Dark Knights"
          className="achievement-icon"
        />
        <span>SURVIVED 99 NIGHTS</span>
      </li>
      <li>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2164/2164609.png"
          alt="Dark Knights"
          className="achievement-icon"
        />
        <span>REACH PEAK</span>
      </li>
    </ul>
  </Card>
        </div>
      </div>
      

      {/* POPULAR FORUMS */}
      <section className="forums">
  <h2>Favorite Games</h2>
  <div className="forum-grid">
    <Card className="forum-card">
      <div className="forum-header">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b3e97f2-7e29-44fe-80a9-cd068e923cc7/dduxd55-c9d14592-a876-45ef-b3df-5494462865b8.png/v1/fill/w_894,h_894/valorant_logo__high_resolution___hd__by_mineboxpc_dduxd55-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwMCIsInBhdGgiOiJcL2ZcLzliM2U5N2YyLTdlMjktNDRmZS04MGE5LWNkMDY4ZTkyM2NjN1wvZGR1eGQ1NS1jOWQxNDU5Mi1hODc2LTQ1ZWYtYjNkZi01NDk0NDYyODY1YjgucG5nIiwid2lkdGgiOiI8PTY0MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.wghvLabFujdoNthl-9vtfuuZIVG7UDZTjpIj_cvSGlk"
          alt="RDR2 Logo"
          className="forum-logo"
        />
        <div className="forum-info">
          <h3 className="forum-title">Valorant</h3>
          <p className="forum-time">2400 Hours played</p>
          <p className="forum-last">Last played: 3 Hours Ago</p>
        </div>
      </div>
    </Card>

    <Card className="forum-card">
      <div className="forum-header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1e87C8JS4LPKufPU3-GvIlRkZeHMoKj3lEjQef7hNKLULgWbTfP3HS6cLkWn_NVpNSuo&usqp=CAU"
          alt="Minecraft Logo"
          className="forum-logo"
        />
        <div className="forum-info">
          <h3 className="forum-title">Roblox</h3>
          <p className="forum-time">620 Hours played</p>
          <p className="forum-last">Last played: Yesterday</p>
        </div>
      </div>
    </Card>

    <Card className="forum-card">
      <div className="forum-header">
        <img
          src="https://www.inspireuplift.com/resizer/?image=https://cdn.inspireuplift.com/uploads/images/seller_products/30779/1705579991_ResidentEvil4Logo.png&width=800&height=800&quality=90&format=auto&fit=pad"
          alt="Monster Hunter Logo"
          className="forum-logo"
        />
        <div className="forum-info">
          <h3 className="forum-title">Resident Evil 4</h3>
          <p className="forum-time">340 Hours played</p>
          <p className="forum-last">Last played: 1 week ago</p>
        </div>
      </div>
    </Card>

    <Card className="forum-card">
      <div className="forum-header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1f/The_forest_logo.webp"
          alt="Monster Hunter Logo"
          className="forum-logo"
        />
        <div className="forum-info">
          <h3 className="forum-title">The Forest</h3>
          <p className="forum-time">120 Hours played</p>
          <p className="forum-last">Last played: 3 week ago</p>
        </div>
      </div>
    </Card>

    <Card className="forum-card">
      <div className="forum-header">
        <img
          src="https://static.vecteezy.com/system/resources/previews/027/127/502/non_2x/grand-theft-auto-gta-v-logo-grand-theft-auto-gta-v-icon-transparent-free-png.png"
          alt="Monster Hunter Logo"
          className="forum-logo"
        />
        <div className="forum-info">
          <h3 className="forum-title">GTA V</h3>
          <p className="forum-time">222 Hours played</p>
          <p className="forum-last">Last played: 2 months ago</p>
        </div>
      </div>
    </Card>

    <Card className="forum-card">
      <div className="forum-header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31nbmTFz4doSk8Tqh5CkIsuFxq7VlBLo9iw&s"
          alt="Monster Hunter Logo"
          className="forum-logo"
        />
        <div className="forum-info">
          <h3 className="forum-title">NBA 2k25</h3>
          <p className="forum-time">84 Hours played</p>
          <p className="forum-last">Last played: 1 week ago</p>
        </div>
      </div>
    </Card>

    <Card className="forum-card">
      <div className="forum-header">
        <img
          src="data:image/png;base64,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"
          alt="Monster Hunter Logo"
          className="forum-logo"
        />
        <div className="forum-info">
          <h3 className="forum-title">Counter Strike 2</h3>
          <p className="forum-time">700 Hours played</p>
          <p className="forum-last">Last played: 1 week ago</p>
        </div>
      </div>
    </Card>

    <Card className="forum-card">
      <div className="forum-header">
        <img
          src="https://images.seeklogo.com/logo-png/45/1/tekken-8-logo-png_seeklogo-450305.png"
          alt="Monster Hunter Logo"
          className="forum-logo"
        />
        <div className="forum-info">
          <h3 className="forum-title">Tekken 8</h3>
          <p className="forum-time">140 Hours played</p>
          <p className="forum-last">Last played: 3 months ago</p>
        </div>
      </div>
    </Card>

    <Card className="forum-card">
      <div className="forum-header">
        <img
          src="https://images.seeklogo.com/logo-png/20/2/silent-hill-logo-png_seeklogo-202462.png"
          alt="Monster Hunter Logo"
          className="forum-logo"
        />
        <div className="forum-info">
          <h3 className="forum-title">Silent Hill</h3>
          <p className="forum-time">60 Hours played</p>
          <p className="forum-last">Last played: 7 months ago</p>
        </div>
      </div>
    </Card>

    <Card className="forum-card">
      <div className="forum-header">
        <img
          src="https://seeklogo.com/images/G/genshin-impact-logo-959C452E2F-seeklogo.com.png"
          alt="Monster Hunter Logo"
          className="forum-logo"
        />
        <div className="forum-info">
          <h3 className="forum-title">Genshin Impact</h3>
          <p className="forum-time">1220 Hours played</p>
          <p className="forum-last">Last played: 15 days ago</p>
        </div>
      </div>
    </Card>

    <Card className="forum-card">
      <div className="forum-header">
        <img
          src="https://pbs.twimg.com/media/FruKsvzWAAESMQm?format=jpg&name=4096x4096"
          alt="Monster Hunter Logo"
          className="forum-logo"
        />
        <div className="forum-info">
          <h3 className="forum-title">WuWa</h3>
          <p className="forum-time">320 Hours played</p>
          <p className="forum-last">Last played: 5 months ago</p>
        </div>
      </div>
    </Card>

    <Card className="forum-card">
      <div className="forum-header">
        <img
          src="https://images.seeklogo.com/logo-png/43/1/elden-ring-logo-png_seeklogo-431290.png"
          alt="Monster Hunter Logo"
          className="forum-logo"
        />
        <div className="forum-info">
          <h3 className="forum-title">Elden Ring</h3>
          <p className="forum-time">900  Hours played</p>
          <p className="forum-last">Last played: 4 days ago</p>
        </div>
      </div>
    </Card>
  </div>
</section>

    </div>
    </div>
  );
};

export default Umipon;
