import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css"; // Assuming you have a CSS file for styling
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const role = localStorage.getItem("role");
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };
  const location = useLocation();
  const hideLogout =
    location.pathname === "/login" || location.pathname === "/signin";

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#1e1e1e" }}
      >
        <div className="container-fluid">
          <div className="navbar-brand">{props.title}</div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={role === "student" ? "/" : "/admin"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/about">
                  About
                </Link> */}
              </li>
            </ul>
            {!hideLogout && (
              <button className="login-btn" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(["light", "dark"]),
};

export default Navbar;
