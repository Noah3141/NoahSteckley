import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../images/Logo600-loose.png";
import EngRuss from "./EngRuss";

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
          <ul className="navbar-nav me-auto pt-2 p-4 p-lg-1 mb-lg-0">
            <li id="home-header" className="nav-item dropdown mx-lg-2">
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
                    My Research
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
            <li id="tools-header" className="nav-item dropdown mx-lg-1">
              <Link to="/tools" className="nav-link  text-light">
                Tools
              </Link>
            </li>
          </ul>
          {/* The right hand side */}
          <ul className="navbar-nav ms-auto pe-4 pb-4 p-lg-0 p-lg-0">
            <li id="about-header" className="nav-item dropdown mx-lg-1">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>
            <li id="contact-header" className="nav-item dropdown mx-lg-1">
              <Link className="nav-link text-light" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <li className="nav-item dropdown mr-4 mx-lg-0">
            <Link
              to="https://www.linkedin.com/in/noah-steckley/"
              target="_blank"
              rel="noreferrer"
              className="nav-link link-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
                className=""
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </Link>
          </li>
          <li className="nav-item dropdown ">
            <Link
              to="https://github.com/Noah3141"
              target="_blank"
              rel="noreferrer"
              className="nav-link link-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
                className=""
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>
          </li>

          <li className="nav-item radio text-light ps-lg-2">
            <div
              className="btn-group btn-group-sm mb-4 mt-2 my-lg-auto "
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
                className="btn btn-outline-info text-dark"
                htmlFor="btnradio1"
              >
                <b>EN</b>
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
              />
              <label
                className="btn btn-outline-info text-dark"
                htmlFor="btnradio2"
              >
                <b>RU</b>
              </label>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
