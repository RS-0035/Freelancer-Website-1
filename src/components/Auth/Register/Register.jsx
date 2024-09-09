import React, { useEffect, useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = ({ setEmails }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);

    // Ensure it's an array
    if (!Array.isArray(users)) {
      users = [];
    }

    const user = {
      email,
      password,
      role,
    };

    const existEmail = users.some((user) => user.email === email);

    if (existEmail) {
      alert("This email is already registered. Please use a different email.");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      const newUser = { email, password, role };

      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));

      setEmail("");
      setPassword("");
      setRole("");

      console.log("Registration successful!");
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("isRegistered", "true");
      localStorage.setItem("CurrentEmail", email);
      if (role === "client") {
        setEmails(email);
        navigate("/");
      } else if (role === "freelancer") {
        setEmails(email);
        navigate("/home-two");
      }
    }
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Re-Password</label>
          <input
            id="password"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-btn">
          Register
        </button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
