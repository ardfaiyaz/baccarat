import React from 'react';
import { BadgeCheck, Gamepad2, Layers3, Flame, Clock, User, Award, Crown } from 'lucide-react';
import ButaCard from '../Butacard'; 
import '../profiles-css/Buta.css'; 
import ME from '../assets/hero.jpg'

// Buta is the main profile page component.
// It displays user information and a grid of game cards.
const Buta = () => {
  // Mock data for the user profile and games
  const userProfile = {
    username: 'Quan Faiyaz!',
    bio: 'Gamer Profile',
    profilePicture: ME,
    level: 321,
    joinedDate: 'Joined October 2021',
    aboutMe: 'Epitome of Gaming',
  };

  const gameData = [
    {
      id: 1,
      title: 'Valorant',
      hours: 1900,
      level: 500,
      rank: 'Radiant',
      achievements: 12,
      imageUrl: 'https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg',
    },
    {
      id: 2,
      title: 'Apex Legends',
      hours: 591,
      level: 402,
      rank: 'Platinum',
      achievements: 12,
      imageUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1172470/f002ac48d98f501231e7d8bd3cc418b65c8d511a/capsule_616x353.jpg?t=1754578148',
    },
    {
      id: 3,
      title: 'Mobile Legends Bang Bang',
      hours: 3000,
      level: 72,
      rank: 'Mythical-Immortal',
      achievements: 120,
      imageUrl: 'https://play-lh.googleusercontent.com/Bi6Ci1rk-szbr2-zaiy1ERCwgf6ndaNX81btfma8JurIMAg-_E5erEHGT2E5U6pyRCGSaV0091Kdt6tOboL9t9Y',
    },
    {
      id: 4,
      title: 'Grand Theft Auto V Legacy',
      hours: 178,
      level: 122,
      rank: 'N/A',
      achievements: 14,
      imageUrl: 'https://sm.ign.com/ign_latam/screenshot/default/grand-theft-auto-v-codigo-bully-dlc_9nas.jpg',
    },
    {
      id: 5,
      title: 'Read Dead Redemption 2',
      hours: 95,
      level: 30,
      rank: 'N/A',
      achievements: 10,
      imageUrl: 'https://gaming-cdn.com/images/products/5679/orig/red-dead-redemption-2-pc-game-rockstar-cover.jpg?v=1713793245',
    },
    {
      id: 6,
      title: 'Farlight 84',
      hours: 27,
      level: 30,
      rank: 'Diamond',
      achievements: 15,
      imageUrl: 'https://dapcdn.63cj.com/web/mkt_config/10060_2d3f39cb25bb337428f15ad481e1b893_1726224306.png',
    },
  ];

  return (
    <div className="buta-container">
      <header className="buta-header">
        <h1 className="buta-title">
          <Crown size={48} className="buta-title-icon" />
          Deckboard
        </h1>
        <p className="buta-bio">{userProfile.bio}</p>
      </header>

      {/* Profile Section */}
      <section className="buta-profile-section">
        <img
          src={userProfile.profilePicture}
          alt="Profile"
          className="buta-profile-image"
        />
        <div className="buta-profile-info">
          <h2 className="buta-username">
            {userProfile.username}
            <BadgeCheck size={24} className="buta-badge-icon" />
          </h2>
          <p className="buta-joined-date">{userProfile.joinedDate}</p>
          <p className="buta-about-me">{userProfile.aboutMe}</p>
          <div className="buta-stats">
            <div className="buta-stat-item">
              <Layers3 size={18} className="buta-stat-icon text-green-400" />
              Level {userProfile.level}
            </div>
            <div className="buta-stat-item">
              <User size={18} className="buta-stat-icon text-red-400" />
              Friends: 25 
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section>
        <h2 className="buta-games-title">
          <Gamepad2 size={32} className="buta-games-icon" />
          My Games
        </h2>
        <div className="buta-games-grid">
          {gameData.map((game) => (
            <ButaCard
              key={game.id}
              title={game.title}
              hours={game.hours}
              level={game.level}
              rank={game.rank}
              achievements={game.achievements}
              imageUrl={game.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Buta;
