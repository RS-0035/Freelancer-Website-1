import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import userImage from "../../imgs/user.png";

const ProfilePage = ({ email }) => {
  const [savedData, setSavedData] = useState(null); 
  const userId = 1;

  console.log(email);

  // Fetch portfolio data from localStorage
  useEffect(() => {
    const data = localStorage.getItem(`freelancerPortfolio_${email}`);
    if (data) {
      setSavedData(JSON.parse(data));
    }
  }, [email]);

  // If no portfolio data is found, display a message
  if (!savedData) {
    return <p>No portfolio data found.</p>;
  }

  // Ensure portfolio is an array to avoid errors during mapping
  const portfolioItems = Array.isArray(savedData.portfolio)
    ? savedData.portfolio
    : [];

  return (
    <div className="container">
      <header className="header">
        <div className="logo">Nework</div>
        <div className="icons">
          <div className="icon heart">&#9829;</div>
          <div className="icon settings">&#9881;</div>
        </div>
      </header>
      <div
        style={{
          border: "2px solid red",
          display: "flex",
          alignItems: "center",
        }}
        className="content"
      >
        <div style={{ border: "2px solid red" }} className="profile-card">
          <img
            src={savedData.image || userImage} // Use saved image or default image if none exists
            alt="Profile"
            className="profile-image"
          />
          <h2 className="name">{savedData.name || "Ahmadjon Abrorov"}</h2>
          <p className="username">@{email.split("@")[0]}</p>
          <p className="description">
            {savedData.bio || "Web programmer | Teacher"}
          </p>
          <p className="location">Farg'ona, O'zbekiston</p>
          <Link to={`/chat/${userId}`}>
            <button>Chat</button>
          </Link>
          <div className="stats">
            <div className="stat">
              <strong>9 999</strong> Obunachi
            </div>
            <div className="stat">
              <strong>1 000</strong> Obuna
            </div>
            <div className="stat">
              <strong>123 456</strong> Ko'rishlar
            </div>
          </div>
          <p className="tagline">
            {savedData.tagline ||
              "Agar siz onlayn-do'kon ochmoqchi bo'lsangiz va qayerdan boshlashni bilmasangiz, men sizga yordam beraman."}
          </p>
        </div>
        <div style={{ border: "2px solid red" }} className="portfolio">
          <div className="tabs">
            <div className="tab selected">Rasmlar</div>
            <div className="tab">Videolar</div>
            <div className="tab">Tajriba</div>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <img
                key={index}
                src={item.imageUrl || "https://via.placeholder.com/150"}
                alt={item.title || "Portfolio Item"}
                className="portfolio-item"
              />
            ))}
            <div className="portfolio-item placeholder">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
