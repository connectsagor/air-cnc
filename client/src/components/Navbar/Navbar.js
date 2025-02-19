import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar border-bottom">
      <div className="container">
        <div className="nav-menu d-flex justify-content-between align-items-center w-100">
          <div className="logo">
            <h3 className="primary-color">AirCNC</h3>
          </div>
          <div className="navigation d-flex align-items-center gap-3 ms-auto">
            <Link to="/host">Host your home</Link>
            <Link to="/help">Help</Link>
            <Link to="/login">Login</Link>
            <Link className="primary-btn py-2 px-3 rounded-4" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
