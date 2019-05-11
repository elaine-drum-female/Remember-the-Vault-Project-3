import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div className="nav-container">
        <nav className="bground-color">
          <ul className="nav">
              <Link className="navbar-brand" to="/">Remember the Vault</Link> 
              <ul className="nav justify-content-end ml-auto">
                <li className="nav-item">
                  <i className="fas fa-user-circle"></i>
                  <Link className="navbar-brand" to="/">My Account</Link>
                </li>
                <li className="nav-item">
                  <Link className="navbar-brand" to="/">Sign Out</Link>
                </li>
              </ul>
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;
