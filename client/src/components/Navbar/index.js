import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import cclogo from "../Image/cc_shortlogo.gif";
import { useIsAuthenticated } from "../../utils/auth.js";

function Navbar() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src= {cclogo} alt="logo" width="80" height="28" />
        </Link>

        <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>

          <Link className="navbar-item" to="/community">
            Community
          </Link>
          <Link className="navbar-item" to="/profile">
            Profile
          </Link>

          <Link className="navbar-item" to="/about">
            About Us
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {!isAuthenticated && <Link className="button is-primary" to="/signup">
                <strong>Sign up</strong>
              </Link>}
              
              {!isAuthenticated && <Link className="button is-light" to="/login">
                Log in
              </Link>}

              {isAuthenticated && <Link className="button is-danger" to="/">
                Log out
              </Link>}

            </div>
          </div>
        </div>
      </div>
    </nav>
    );
}

export default Navbar;