import React from "react";
import "../ilawancard/Card.css";

function Card({ title, children }) {
  return (
    <div className="ilawan-card">
      {title && <h3 className="ilawan-card-title">{title}</h3>}
      <div className="ilawan-card-content">{children}</div>
    </div>
  );
}

export default Card;
