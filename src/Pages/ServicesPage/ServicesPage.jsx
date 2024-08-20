import React from "react";
import "./ServicesPage.css";
import sampleImage from "../../imgs/design.png";

const services = [
  "Dasturlash & IT",
  "Reklama & Marketing",
  "Grafika & Dizayn",
  "Video & Animatsiya",
  "Hunarmandchilik",
  "Qo’l mehnati",
];

const freelancers = [
  {
    name: "Azamatjon",
    title: "Web programmer",
    description: "Teacher\nRobotics specialist",
    likes: "1,2K",
    imgSrc: sampleImage,
  },
  // Add more freelancers here
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      <header className="header">
        <h1>Dasturlash & IT!</h1>
        <p>
          Nework eng ko’p O’zbekistondagi freelancerlarni shu yerdan topishingiz
          mumkin!
        </p>
      </header>
      <div className="content">
        <div className="sidebar">
          <h2>Xizmatlar</h2>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                <span>{service}</span>
                <span className="arrow">→</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="freelancers">
          {freelancers.map((freelancer, index) => (
            <div key={index} className="freelancer-card">
              <div className="freelancer-header">
                <img
                  src={freelancer.imgSrc}
                  alt={freelancer.name}
                  className="freelancer-image"
                />
                <h3>{freelancer.name}</h3>
              </div>
              <p className="freelancer-title">{freelancer.title}</p>
              <p className="freelancer-description">{freelancer.description}</p>
              <div className="freelancer-likes">
                <span>❤️</span>
                <span>{freelancer.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
