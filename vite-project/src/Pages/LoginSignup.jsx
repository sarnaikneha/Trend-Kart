import React, { useState, useEffect } from "react";
import "../Styling/LoginSignup.css";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateContact = (contact) => {
    return /^\d{10}$/.test(contact);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (!isLogin) {
      if (!formData.fullName) {
        newErrors.fullName = "Full Name is required";
      }

      if (!formData.contact) {
        newErrors.contact = "Contact number is required";
      } else if (!validateContact(formData.contact)) {
        newErrors.contact = "Enter a valid 10-digit contact number";
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Confirm Password is required";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert(isLogin ? "Login Successful!" : "Signup Successful!");
      const userData = {
        fullName: formData.fullName,
        email: formData.email,
        contact: formData.contact,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      navigate("/");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      <nav className="navbar">
        <h1>TrandKart</h1>
        {user ? (
          <div>
            <span>Welcome, {user.fullName}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={() => setIsLogin(true)} className="login-btn">
            Login
          </button>
        )}
      </nav>

      <div className="container">
        <div className="form-box">
          <h2 className="title">
            {isLogin ? "Login to TrandKart" : "Sign Up for TrandKart"}
          </h2>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && <p className="error">{errors.fullName}</p>}
              </div>
            )}
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            {!isLogin && (
              <div className="input-group">
                <label>Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  placeholder="Enter your contact number"
                  value={formData.contact}
                  onChange={handleChange}
                />
                {errors.contact && <p className="error">{errors.contact}</p>}
              </div>
            )}
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            {!isLogin && (
              <div className="input-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
              </div>
            )}
            <button className="submit-btn">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="toggle-text">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginSignup;
