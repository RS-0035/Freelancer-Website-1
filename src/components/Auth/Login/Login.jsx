import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setEmails }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem("users")) || [];
    const selectedRole = localStorage.getItem("userRole");
    console.log(storedUserData);

    if (Array.isArray(storedUserData)) {
      // Find the user that matches the provided email and password
      const user = storedUserData.find(
        (user) => user.email === email && user.password === password
      );
      console.log(user.role);
      console.log(selectedRole);

      if (user) {
        const registeredRole = user.role;

        // Validate that the selected role matches the registered role
        if (selectedRole === registeredRole) {
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("userType", registeredRole);

          // Navigate based on the registered role
          if (registeredRole === "client") {
            setEmails(email);
            navigate("/");
          } else if (registeredRole === "freelancer") {
            setEmails(email);
            navigate("/home-two");
          }
        } else {
          alert(
            "You cannot log in with this role. Please select the correct role."
          );
        }
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } else {
      // Handle the case where storedUserData is not an array
      alert("User data is corrupted.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-options">
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
