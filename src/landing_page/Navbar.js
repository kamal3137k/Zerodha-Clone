import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar sm:navbar-expand fixed-top  bg-inverse  ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="media/logo.svg" style={{ width: "28%" }} />
        </Link>
        <button
          className="btn-icon navbar-toggler"
          type="button"
          data-bs-toggle="drawer"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" aria-hidden="true"></span>
        </button>
        <dialog
          className="drawer drawer-end"
          tabindex="-1"
          id="navbarNav"
          aria-labelledby="navbarNavLabel"
        >
          <div className="drawer-header">
            <h5 className="drawer-title fg-black" id="navbarNavLabel">
              <i class="fa-solid fa-bars"></i>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="drawer"
              aria-label="Close"
            ></button>
          </div>
          <div className="drawer-body  justify-content-around ">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link
                  className="nav-link active fg-black me-4"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active fg-black me-4"
                  aria-current="page"
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active fg-black me-4"
                  aria-current="page"
                  to="product"
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active fg-black me-4"
                  aria-current="page"
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active fg-black me-4"
                  aria-current="page"
                  to="/support"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </dialog>
      </div>
    </nav>
  );
}

export default Navbar;
