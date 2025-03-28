import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user, setUser }) => {
  const handleSignOut = () => {
    setUser(null); // Clear user on sign-out
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>MediHub</h2>
      </div>
      <ul className="navbar-links">
        {user ? (
          <li className="user-info">
            <span>Welcome, {user}</span>
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