import React, { useEffect, useState } from "react";
import "./ServicesPage.css";
import sampleImage from "../../imgs/user.png";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [freelancers, setFreelancers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Xizmatlarni yuklash
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Xizmatlarni yuklashda xatolik: ", error));

    // Freelancerlarni yuklash
    fetch("http://localhost:5000/freelancers")
      .then((response) => response.json())
      .then((data) => setFreelancers(data))
      .catch((error) => console.error("Freelancerlarni yuklashda xatolik: ", error));
  }, []);

  const handleMoveProfile = () => {
    navigate(`/profile`);
  };

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
                <span>{service.name}</span>
                <span className="arrow">→</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="freelancers">
          {freelancers.map((freelancer, index) => (
            <div
              onClick={handleMoveProfile}
              key={index}
              className="freelancer-card"
              style={{ cursor: "pointer" }}
            >
              <div className="freelancer-header">
                <img
                  src={freelancer.imgSrc || sampleImage}
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
