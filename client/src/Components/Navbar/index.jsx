import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{
          backgroundColor: "#2ECC71",
          boxShadow: "10px 1px 10px 1px #ddd"
        }}
      >
        <Link to="/" className="nav-link">
          <FontAwesomeIcon
            icon={faCar}
            style={{ color: "white", fontSize: "38px" }}
          />
          <span
            style={{
              color: "white",
              fontSize: "28px",
              marginLeft: "10px",
              fontFamily: "LatoSansSerif"
            }}
          >
            DecaDrive
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                Dashboard
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/drivers" className="nav-link">
                Drivers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/trips" className="nav-link">
                Trips
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
