import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState, useRef, useEffect } from "react";

export function HomeNav() {
  const [schools, setSchools] = useState([
    { schoolId: "1222", schoolName: "Software Engineering", url: "/schoolOfSoftwareEngineering" },
    { schoolId: "1333", schoolName: "Data Science", url: "/schoolOfDataScience" },
  ]);
  return (
    <div
      className="navbar navbar-expand-lg"
      style={{
        height: "80px",
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        color: "white",
        backgroundColor: "#0d0a2c",
        zIndex: "2",
      }}
    >
      <div className="container-fluid">
        <a href="/" className="navbar-brand text-white">
          SaikLearn
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#homenav"
          style={{ border: "1px solid white" }}
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>
        <div className="collapse navbar-collapse  p-3" id="homenav" style={{ backgroundColor: "#0d0a2c", color: "white" }}>
          <ul className="navbar-nav ms-auto -5">
            <li className="nav-item">
              <div className="dropdown">
                <a
                  className="btn dropdown-toggle text-white"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Schools
                </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  {schools.map((obj, index) => {
                    return (
                      <li key={index}>
                        <a data-school-id={obj.schoolId} className="dropdown-item" href={obj.url}>
                          {obj.schoolName}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a href="/admission" className="nav-link text-white">
                Admissions
              </a>
            </li>
            <li className="nav-item">
              <a href="/aboutUs" className="nav-link text-white">
                Aboutus
              </a>
            </li>
            <li className="nav-item">
              <a href="/contactUs" className="nav-link text-white">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="/signin" className="nav-link" style={{ color: "#fd7e14" }}>
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a href="/signUp" className="nav-link" style={{ color: "#fd7e14" }}>
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
