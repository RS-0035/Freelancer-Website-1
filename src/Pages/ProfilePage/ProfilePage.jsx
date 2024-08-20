import React from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">Nework</div>
        <div className="icons">
          <div className="icon heart">&#9829;</div>
          <div className="icon settings">&#9881;</div>
        </div>
      </header>
      <div className="banner"></div>
      <div className="content">
        <div className="profile-card">
          <img src="https://via.placeholder.com/150" alt="Profile" className="profile-image" />
          <h2 className="name">Azamatjon Muhammadjonov</h2>
          <p className="username">@Azamatjon</p>
          <p className="description">Web programmer | Teacher | Robotics specialist</p>
          <p className="location">Farg'ona, O'zbekiston</p>
          <div className="stats">
            <div className="stat"><strong>9 999</strong> Obunachi</div>
            <div className="stat"><strong>1 000</strong> Obuna</div>
            <div className="stat"><strong>123 456</strong> Ko'rishlar</div>
          </div>
          <p className="tagline">
            Agar siz onlayn-do'kon ochmoqchi bo'lsangiz va qayerdan boshlashni bilmasangiz, men sizga yordam beraman.
          </p>
        </div>
        <div className="portfolio">
          <div className="tabs">
            <div className="tab selected">Rasmlar</div>
            <div className="tab">Videolar</div>
            <div className="tab">Tajriba</div>
          </div>
          <div className="portfolio-grid">
            <img src="https://via.placeholder.com/150" alt="Web programming" className="portfolio-item" />
            <img src="https://via.placeholder.com/150" alt="Development" className="portfolio-item" />
            <img src="https://via.placeholder.com/150" alt="Java" className="portfolio-item" />
            <img src="https://via.placeholder.com/150" alt="Python" className="portfolio-item" />
            <div className="portfolio-item placeholder">+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
