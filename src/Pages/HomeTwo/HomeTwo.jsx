import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeTwo.css";

const HomeTwo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const email = localStorage.getItem("CurrentEmail");
  // Fetch user information from localStorage
  useEffect(() => {
    if (email) {
      const data = localStorage.getItem(`freelancerPortfolio_${email}`);
      setUserInfo(data ? JSON.parse(data) : null); // Parse if data exists; otherwise, set to null
    }
  }, [email]);

  const handleClickMove = () => {
    navigate("/profile-form");
  };

  return (
    <div className="freelancer-homepage">
      <header className="hero-section">
        <h1>Welcome back, {userInfo ? userInfo.name || email : email}!</h1>{" "}
        {/* Display email or name */}
        <button
          onClick={() => navigate("/")}
          className={`cta-button ${userInfo ? "enabled" : "disabled"}`}
          disabled={!userInfo} // Button is disabled when userInfo is not present
        >
          Update Profile
        </button>
      </header>

      <section className="dashboard">
        <div className="project-summary">
          <h2>Active Projects</h2>
          {/* List of current projects */}
        </div>
        <div className="services-summary">
          <h2>Your Services</h2>
          <button onClick={handleClickMove} className="add-service-button">
            Add New Service
          </button>
          {/* List of current services */}
        </div>
      </section>

      <section className="earnings-overview">
        <h2>Earnings Overview</h2>
      </section>

      <section className="notifications">
        <h2>Notifications</h2>
      </section>
    </div>
  );
};

export default HomeTwo;
