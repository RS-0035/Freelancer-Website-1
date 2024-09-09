import React from "react";
import "./Layout.css";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAuthenticated");
    navigate(`/select-role`);
  };

  return (
    <div className="layout">
      <header
        style={{
          display: "flex",
          alignItems: "center",
          position: "fixed",
          zIndex: "999",
        }}
        className="header"
      >
        <a style={{ textDecoration: "none" }} href="/" className="logo">
          Nework
        </a>
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
            style={{ outline: "none" }}
            placeholder="Viloyatlar va shahar bo’yicha xizmatlarni qidiring..."
          />
          <button className="search-button">Qidiruv</button>
        </div>
        <nav className="nav">
          <p onClick={handleLogOut} className="nav-link">
            Chiqish
          </p>
        </nav>
      </header>
      <main style={{ padding: "70px" }} className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
