import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    let navigate = useNavigate();
  
  const {user,isAuthenticated,logout } =useAuth();
  const handleSignOut = () => {
    logout()
    return navigate("/signin");

  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>MediHub</h2>
      </div>
      <ul className="navbar-links">
        {isAuthenticated ? (
          <li className="user-info">
            <span>Welcome, {user.email}</span>
            <button className="signout-btn" onClick={handleSignOut}>
              Sign Out
            </button>
          </li>
        ) : (
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sign In
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;