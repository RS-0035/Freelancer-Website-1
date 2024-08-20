import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, userType }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const storedUserType = localStorage.getItem('userType');

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (userType && storedUserType !== userType) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;
