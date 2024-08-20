import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1 className="logo">Nework</h1>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            className="search-bar"
            placeholder="Viloyatlar va shahar bo’yicha xizmatlarni qidiring..."
          />
          <button className="search-button">Qidiruv</button>
        </div>
        <nav className="nav">
          <a href="#freelancers" className="nav-link">
            Freelancers
          </a>
        </nav>
      </header>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
