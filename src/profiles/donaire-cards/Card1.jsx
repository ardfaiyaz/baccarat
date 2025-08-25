import React from "react";
import "./Card1.css";

function Card1() {
  const games = [
    { 
      name: "Valorant", 
      img: "https://cdn2.steamgriddb.com/icon_thumb/9e82757e9a1c12cb710ad680db11f6f1.png",
      recent: "Last played: Yesterday",
      hours: "420 hrs played"
    },
    { 
      name: "Dragon Raja Rerise", 
      img: "https://play-lh.googleusercontent.com/W-CzAn-W-tWrELjPtofop-qsQNALfCaHv8xguo-8OO8IRn-G2CjSI9-jxtxSQIrzTQNq=w240-h480-rw", /* placeholder image, replace with a better one if you have */
      recent: "Last played: 3 days ago",
      hours: "180 hrs played"
    },
    { 
      name: "CS2", 
      img: "https://cdn2.steamgriddb.com/icon/e1bd06c3f8089e7552aa0552cb387c92/32/512x512.png",
      recent: "Last played: 1 day ago",
      hours: "500 hrs played"
    },
    { 
      name: "The Last of Us Part II", 
      img: "https://assets1.ignimgs.com/2020/03/05/last-of-us-2---button-2020-1583430650540.jpg",
      recent: "Last played: 5 days ago",
      hours: "70 hrs played"
    },
    { 
      name: "Final Fantasy XVI", 
      img: "https://fyre.cdn.sewest.net/ff-xvi/637cf9194dc880a0db62c591/hero_bg-tT8XHFrO5.jpg?quality=85&width=3840",
      recent: "Last played: 1 week ago",
      hours: "120 hrs played"
    },
    { 
      name: "GTA V", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGX17lP1sKgnT7uHIg5zgI7G136TFJajNvg&s",
      recent: "Last played: 2 weeks ago",
      hours: "400 hrs played"
    },
    { 
      name: "NFS Heat", 
      img: "https://cdn2.steamgriddb.com/icon/acf7c66123cd145d39a062ded3aafd6b.ico",
      recent: "Last played: 2 days ago",
      hours: "150 hrs played"
    },
    { 
      name: "F1 2024", 
      img: "https://cdn-6.motorsport.com/images/amp/Y9984G7Y/s1000/f1-24-game.jpg", /* placeholder image */
      recent: "Last played: 1 day ago",
      hours: "60 hrs played"
    },
    { 
      name: "The Legend of Zelda", 
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c78bc3fc-9f08-47ca-81ae-d89055c7ec49/dgzjc79-1a4bcc5d-fd59-45b1-a2a6-9802aacf92bb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M3OGJjM2ZjLTlmMDgtNDdjYS04MWFlLWQ4OTA1NWM3ZWM0OVwvZGd6amM3OS0xYTRiY2M1ZC1mZDU5LTQ1YjEtYTJhNi05ODAyYWFjZjkyYmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SvkGGRJq-sR9T6UGmn4WDUTtwKPNJ6MmFN03YH_beIM",
      recent: "Last played: Yesterday",
      hours: "200 hrs played"
    },
    { 
      name: "Minecraft", 
      img: "https://static.wikia.nocookie.net/logopedia/images/0/0f/Minecraft_Bedrock_2023.svg",
      recent: "Last played: Today",
      hours: "600 hrs played"
    }
  ];

  return (
    <div className="card1">
      <h3>Favorite Games</h3>
      <div className="game-list">
        {games.map((game, i) => (
          <div key={i} className="game-card">
            <img src={game.img} alt={game.name} className="game-img" />
            <div className="game-info">
              <p className="game-name">{game.name}</p>
              <p className="game-recent">{game.recent}</p>
              <p className="game-hours">{game.hours}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card1;
