import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo600-loose.png";

function Navbar() {
  return (
    <nav
      className="navbar fs-5 fixed-top navbar-expand-lg bg-dark shadow"
      data-bs-theme="light"
    >
      <div className="container" style={{ height: "50px" }}>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand m-0" to="/">
          <img className="img " width="50px" src={logo} alt="logo" />
        </Link>

        <div
          className="collapse navbar-collapse bg-dark navbar-nav"
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link mx-lg-3 text-light">
                Home
              </Link>
            </li>

            {/* The dropdown button for "Articles" */}

            <li class="nav-item dropdown  text-light mx-lg-3">
              <Link
                to="/articles"
                className="nav-link dropdown-toggle text-light"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Articles
              </Link>
              <ul className="dropdown-menu bg-dark border border-black fs-5">
                <li>
                  <Link
                    className="dropdown-item highlight-dark text-light"
                    to="/articles/literature-reviews"
                  >
                    Literature Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item highlight-dark text-light"
                    to="/articles/my-research"
                  >
                    My Research Papers
                  </Link>
                </li>

                <li>
                  <Link
                    className="dropdown-item highlight-dark text-light"
                    to="/articles/psychotherapy-integration"
                  >
                    Psychotherapy Integration
                  </Link>
                </li>
              </ul>
            </li>

            {/* The basic Links along left */}

            <li className="nav-item fluid mx-lg-3  ">
              <Link to="/websites" class="nav-link text-light">
                Websites
              </Link>
            </li>
            <li className="nav-item mx-lg-3  ">
              <Link to="/graphics" className="nav-link text-light">
                Graphics
              </Link>
            </li>
            <li className="nav-item me-2  ">
              <Link to="/sheets" className="nav-link text-light">
                Google Sheets
              </Link>
            </li>
            <li className="nav-item  ">
              <Link to="/book-reviews" className="nav-link text-light">
                Book Reviews
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/gadgets" className="nav-link  text-light">
                Gadgets
              </Link>
            </li>
          </ul>
          {/* The right hand side */}
          <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light  " to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">{"             "}</li>

            <li className="nav-item radio text-light">
              <div
                className="btn-group btn-group-sm pt-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autocomplete="off"
                  checked
                />
                <label
                  className="btn btn-outline-info  text-light"
                  for="btnradio1"
                >
                  EN
                </label>

                <input
                  type="radio"
                  className="btn-check btn-sm text-light"
                  name="btnradio"
                  id="btnradio2"
                  autocomplete="off"
                />
                <label
                  className="btn btn-outline-info text-light"
                  for="btnradio2"
                >
                  RU
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
