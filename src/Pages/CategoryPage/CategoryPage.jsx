import React from 'react';
import './CategoryPage.css';
import img1 from '../../imgs/programming.png';
import img2 from '../../imgs/marketing.png';
import img3 from '../../imgs/design.png';
import img4 from '../../imgs/video.png';
import img5 from '../../imgs/craftsmanship.png';
import img6 from '../../imgs/manual.png';

const categories = [
  { name: 'Dasturlash & IT', imgSrc: img1 },
  { name: 'Reklama & Marketing', imgSrc: img2 },
  { name: 'Grafika & Dizayn', imgSrc: img3 },
  { name: 'Video & Animatsiya', imgSrc: img4 },
  { name: 'Hunarmandchilik', imgSrc: img5 },
  { name: 'Qo’l mehnati', imgSrc: img6 }
];

const CategoryPage = () => {
  return (
    <div className="category-page">
      <main className="main-content">
        <h2 className="main-title">Tarmoqlar bo’yicha ishlar!</h2>
        <div className="category-cards">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.imgSrc} alt={category.name} className="category-image" />
              <h3 className="category-name">{category.name}</h3>
              <button className="category-button">→</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
