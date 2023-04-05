import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo600-loose.png";

function Navbar() {
  return (
    <nav
      className="navbar fs-5 fixed-top navbar-expand-lg bg-light border-bottom"
      data-bs-theme="light"
    >
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link mx-lg-3">
                Home
              </Link>
            </li>

            {/* The dropdown button for "Articles" */}

            <li class="nav-item dropdown mx-lg-3">
              <Link
                to="/articles"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Articles
              </Link>
              <ul className="dropdown-menu fs-5">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/articles/literature-reviews"
                  >
                    Literature Reviews
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/articles/my-research">
                    My Research Papers
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item"
                    to="/articles/psychotherapy-integration"
                  >
                    Psychotherapy Integration
                  </Link>
                </li>
              </ul>
            </li>

            {/* The basic Links along left */}

            <li className="nav-item mx-lg-3">
              <Link to="/websites" class="nav-link">
                Websites
              </Link>
            </li>
            <li className="nav-item mx-lg-3">
              <Link to="/graphics" className="nav-link">
                Graphics
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link to="/sheets" className="nav-link">
                Google Sheets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/book-reviews" className="nav-link">
                Book Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gadgets" className="nav-link">
                Gadgets
              </Link>
            </li>
          </ul>

          {/* The right hand side */}

          <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="navbar-brand ms-4" to="/">
                <img width="50px" src={logo} alt="logo" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
