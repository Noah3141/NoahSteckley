import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/Logo600-loose.png";
import EngRuss from "./EngRuss";
import { useEffect } from "react";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    let extension = location.pathname.split("/")[1];
    if (extension === "") {
      extension = "home";
    }
    console.log(`#${extension}-header`);
    const activeHeader = document.querySelector(`#${extension}-header`);
    if (activeHeader) {
      activeHeader.classList.add("link-active");
      return () => {
        activeHeader.classList.remove("link-active");
      };
    }
  }, [location.pathname]);

  return (
    <nav
      className="navbar fs-5 fixed-top navbar-expand-lg bg-dark shadow"
      data-bs-theme="light"
    >
      <div className="container" style={{ height: "60px" }}>
        <button
          className="navbar-toggler border-info border-2 bg-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <Link className="navbar-brand p-0 m-0" to="/">
          <img className="img m-0" width="55px" src={logo} alt="logo" />
        </Link>

        <div
          className="collapse navbar-collapse bg-dark rounded-3 navbar-nav"
          id="navbarNav"
        >
          <ul className="navbar-nav me-auto pt-2 p-4 mb-2 p-lg-0 mb-lg-0">
            <li id="home-header" className="nav-item dropdown mx-lg-3">
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
            </li>

            {/* The dropdown button for "Articles" */}

            <li
              id="articles-header"
              className="nav-item dropdown ms-lg-2 text-light mx-lg-1"
            >
              <Link
                to="/articles"
                className="nav-link dropdown-toggle text-light"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Articles
              </Link>
              {/* This div is the unfold menu for Articles*/}
              <ul className="dropdown-menu bg-info border border-dark border-2 fs-5">
                <li className="dropdown-item">
                  <Link className="text-primary" to="/articles/my-research">
                    My Research Papers
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    className=" text-primary"
                    to="/articles/literature-reviews"
                  >
                    Literature Reviews
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    className=" text-primary"
                    to="/articles/psychotherapy-integration"
                  >
                    Psychotherapy Integration
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className="text-primary" to="/articles/programming">
                    Programming
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className=" text-primary" to="/articles/russian">
                    Russian Language
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link className=" text-primary" to="/articles/other-topics">
                    Other Topics
                  </Link>
                </li>
              </ul>
            </li>

            {/* The basic Links along left */}

            <li id="websites-header" className="nav-item dropdown mx-lg-1  ">
              <Link to="/websites" className="nav-link text-light">
                Websites
              </Link>
            </li>
            <li id="graphics-header" className="nav-item dropdown mx-lg-1  ">
              <Link to="/graphics" className="nav-link text-light">
                Graphics
              </Link>
            </li>
            <li id="sheets-header" className="nav-item dropdown mx-lg-1  ">
              <Link to="/sheets" className="nav-link text-light text-nowrap">
                Google Sheets
              </Link>
            </li>
            <li id="book-reviews-header" className="nav-item dropdown mx-lg-1">
              <Link
                to="/book-reviews"
                className="nav-link text-light text-nowrap"
              >
                Book Reviews
              </Link>
            </li>
            <li id="gadgets-header" className="nav-item dropdown mx-lg-1">
              <Link to="/gadgets" className="nav-link  text-light">
                Gadgets
              </Link>
            </li>
          </ul>
          {/* The right hand side */}
          <ul className="navbar-nav ms-auto pe-4 pe-lg-0 pb-4 pb-lg-0">
            <li id="about-header" className="nav-item dropdown">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>
            <li id="contact-header" className="nav-item dropdown">
              <Link className="nav-link text-light  " to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item radio text-light ms-lg-3">
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
                  autoComplete="off"
                  onChange={EngRuss}
                  checked={true}
                />
                <label
                  className="btn btn-outline-info  text-light"
                  htmlFor="btnradio1"
                >
                  EN
                </label>

                <input
                  type="radio"
                  className="btn-check btn-sm text-light"
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                />
                <label
                  className="btn btn-outline-info text-light"
                  htmlFor="btnradio2"
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
