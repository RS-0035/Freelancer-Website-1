import React, { useEffect, useState } from "react";
import "./SavedProfile.css";

const SavedProfile = ({ email }) => {
  const [savedData, setSavedData] = useState("");

  useEffect(() => {
    const data = localStorage.getItem(`freelancerPortfolio_${email}`);
    console.log(data);
    console.log(email);
    
    
    if (data) {
      setSavedData(JSON.parse(data));
    }
  }, [email]);

  if (!savedData) {
    return <p>No portfolio data found.</p>;
  }

  return (
    <div className="saved-portfolio">
      <h2>{savedData.name}</h2>
      <p>{savedData.bio}</p>
      <p>Skills: {savedData.skills}</p>
      <p>Portfolio: {savedData.portfolio}</p>
      {savedData.image && <img src={savedData.image} alt="Profile" />}
    </div>
  );
};

export default SavedProfile;
