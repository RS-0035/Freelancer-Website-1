import React from "react";
import imag1 from "../../imgs/tashkent_c.png";
import imag2 from "../../imgs/Andijan.png";
import imag3 from "../../imgs/Fergana.png";
import imag4 from "../../imgs/namangan.png";
import imag5 from "../../imgs/tashkent.png";
import imag6 from "../../imgs/sirdaryo.png";
import "./Home.css";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

const regions = [
  { name: "Toshkent shahar", imgSrc: imag1 },
  { name: "Andijon viloyati", imgSrc: imag2 },
  { name: "Farg'ona viloyati", imgSrc: imag3 },
  { name: "Namangan viloyati", imgSrc: imag4 },
  { name: "Toshkent viloyati", imgSrc: imag5 },
  { name: "Sirdaryo", imgSrc: imag6 },
];

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/category`);
  };
  return (
    <div className="homepage">
      <main className="main-content">
        <h2 className="main-title">Viloyatlar va shahar bo’yicha ishlar!</h2>
        <div className="region-cards">
          {regions.map((region, index) => (
            <div onClick={handleClick} key={index} className="region-card">
              <img
                src={region.imgSrc}
                alt={region.name}
                className="region-image"
              />
              <h3 className="region-name">{region.name}</h3>
              <button className="region-button">→</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
  