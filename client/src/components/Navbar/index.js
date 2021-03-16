import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import cclogo from "../Image/cclogo_long.gif";

function Navbar() {
  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src= {cclogo} alt="logo" width="112" height="28" />
        </Link>

        <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <Link className="navbar-item" to="/feed">
            Community
          </Link>
          <Link className="navbar-item" to="/profile">
            Profile
          </Link>

          <Link className="navbar-item">
            About Us
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button is-primary" to="/signup">
                <strong>Sign up</strong>
              </Link>
              <Link className="button is-light" to="/login">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    );
}

export default Navbar;