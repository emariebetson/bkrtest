import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/login"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/register"
              className={
                window.location.pathname === "/register"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={
                window.location.pathname === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/newsfeed"
              className={
                window.location.pathname === "/newsfeed"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              NewsFeed
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/hotbars"
              className={
                window.location.pathname === "/hotbars"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Hot Bars
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;