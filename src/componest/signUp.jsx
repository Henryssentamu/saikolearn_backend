import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Footer } from "../subcomponets/footers/home";
import { HomeNav } from "../subcomponets/headers/homepage";

export function SignUp() {
  //   const countries = require("country-list");
  //   console.log(countries.getName()); // "all country names"
  //   console.log(countries.getCode()); // "all country codes"

  return (
    <div>
      <HomeNav />
      <div className="container d-flex justify-content-center align-items-center " style={{ marginTop: "99px" }}>
        <div className="card shadow p-4" style={{ width: "1000px" }}>
          <h2 className="text-center mb-4">Register</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Surname</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <div className="d-flex">
                <select className="form-select me-2" required>
                  <option value="">Code</option>
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+256">+256 (Uganda)</option>
                  <option value="+91">+91 (India)</option>
                </select>
                <input type="tel" className="form-control" required />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select className="form-select" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Country of Origin</label>
              <select className="form-select" required>
                <option value="">Select Country</option>
                <option value="usa">USA</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="india">India</option>
              </select>
            </div>
            {/* <div className="mb-3">
            <label className="form-label">Intake</label>
            <select className="form-select" required>
              <option value="">Select Intake</option>
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
              <option value="winter">Winter</option>
            </select>
          </div> */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control" required />
            </div>
            <button type="submit" className="btn  w-100" style={{ backgroundColor: "#0d0a2c", color: "white" }}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
