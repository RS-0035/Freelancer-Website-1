import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const isRegistered = localStorage.getItem("isRegistered");
  const userRole = localStorage.getItem("userRole");

  // Check if the user is registered
  if (!isRegistered) {
    return <Navigate to="/register" replace />;
  }

  // Check if the user has the correct role (if a role is required for the route)
  if (role && userRole !== role) {
    return <Navigate to="/" replace />;
  }

  // If all checks pass, render the children components
  return children;
};

export default ProtectedRoute;
