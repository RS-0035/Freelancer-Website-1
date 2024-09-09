import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2 className="not-found-title">Page Not Found</h2>
      <p className="not-found-message">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="not-found-link">Go to Home</Link>
    </div>
  );
};

export default NotFound;
