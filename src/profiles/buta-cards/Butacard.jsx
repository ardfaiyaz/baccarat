import React from 'react';
import { Clock, Layers3, Crown, Award } from 'lucide-react';
import './Butacard.css'; // Corrected import path for a file in the same directory

// ButaCard is a reusable component for a single game card.
// It displays game-specific information like hours, level, and achievements.
const ButaCard = ({ title, hours, level, rank, achievements, imageUrl }) => {
  return (
    <div className="butacard">
      <div className="butacard-image-container">
        <img
          src={imageUrl}
          alt={title}
          className="butacard-image"
        />
        <div className="butacard-image-overlay"></div>
      </div>
      <div className="butacard-content">
        <h3 className="butacard-title">{title}</h3>
        <div className="butacard-details">
          <div className="butacard-detail-item">
            <Clock size={16} className="butacard-icon text-blue-400" />
            <span>{hours} Hours Played</span>
          </div>
          <div className="butacard-detail-item">
            <Layers3 size={16} className="butacard-icon text-green-400" />
            <span>Level {level}</span>
          </div>
          <div className="butacard-detail-item">
            <Crown size={16} className="butacard-icon text-yellow-400" />
            <span>{rank} Rank</span>
          </div>
          <div className="butacard-detail-item">
            <Award size={16} className="butacard-icon text-purple-400" />
            <span>{achievements} Achievements</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButaCard;
