import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RoleSelectionPage.css";
import hammer from "../../imgs/hammer.png";
import client from "../../imgs/client.png";

const RoleSelectionPage = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    localStorage.setItem("userRole", role);
    navigate("/register");
  };

  return (
    <div className="role-selection-page">
      <h2>Qaysi xizmat turini tanlaysiz?</h2>
      <div className="role-options">
        <div
          className="role-option"
          onClick={() => handleRoleSelection("client")}
        >
          <img width={50} src={client} alt="client" />
          <h3>Mijoz</h3>
          <p>Xizmatlar sotib olish va freelancer larni yo'llash</p>
        </div>
        <div
          className="role-option"
          onClick={() => handleRoleSelection("freelancer")}
        >
          <img width={50} src={hammer} alt="freelancer" />
          <h3>Freelancer</h3>
          <p>Xizmatlarni taqdim etish yoki loyihalarda ishlash</p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;
