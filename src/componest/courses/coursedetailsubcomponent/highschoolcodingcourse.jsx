// Replace lucide-react icons with Bootstrap Icons or suitable SVGs if needed
// This is a Bootstrap adaptation of the CodingProgramPage component

import React from "react";
import heroImage from "../../../../public/sist3.png";
import { HomeNav } from "../../../subcomponets/headers/homepage";
// import {homepage} from "../../../styling/homepage.css"

export function CodingProgramPage(){
  return (
    <div className="min-vh-100 bg-dark text-white">
        < HomeNav />
      {/* Hero Section */}
        <section
            style={{ height: "620px", backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
            className="position-relative d-flex align-items-center justify-content-center text-center overflow-hidden"
            >
            <div className="container">
                <h1 style={{fontWeight:"900", fontSize:"36px"}} className="text-white">Coding Program for High School Students</h1>
                <p style={{fontWeight:"500", fontSize:"26px"}} className="lead text-white">Tailored to fit your school holiday schedule</p>
                <p style={{fontWeight:"400", fontSize:"21px"}} className="text-white">Duration: 3 Term Holidays</p>
            </div>
        </section>

      {/* Overview Section */}
      <section className="py-5 px-3 bg-body text-dark">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-4">Program Overview</h2>
          <p className="text-center fs-5 text-muted mb-5">A comprehensive coding program that fits seamlessly into your school calendar.</p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body text-center">
                  <i className="bi bi-clock fs-1 text-primary mb-3"></i>
                  <h5 className="card-title">Flexible Schedule</h5>
                  <p className="card-text">Evening and weekend classes to fit around school commitments.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body text-center">
                  <i className="bi bi-people fs-1 text-success mb-3"></i>
                  <h5 className="card-title">Small Class Sizes</h5>
                  <p className="card-text">Up to 12 students per class for better engagement.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body text-center">
                  <i className="bi bi-award fs-1 text-warning mb-3"></i>
                  <h5 className="card-title">Certification</h5>
                  <p className="card-text">Earn certificates upon successful completion of each term.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Duration Section */}
      <section className="py-5 bg-light text-dark">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5">Course Duration</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="border rounded p-4 text-center">
                <h4 className="text-primary">Term 1</h4>
                <small className="text-muted">First Term Holiday</small>
                <ul className="list-unstyled mt-3">
                    <li>Introduction to Web Development</li>
                    <li>HTML & CSS Basics</li>
                    <li>Mini Frontend Projects</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border rounded p-4 text-center">
                <h4 className="text-success">Term 2</h4>
                <small className="text-muted">Second Term Holiday</small>
                <ul className="list-unstyled mt-3">
                    <li>Introduction to Programming</li>
                    <li>JavaScript Fundamentals</li>
                    <li>Logical Thinking & Problem Solving</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border rounded p-4 text-center">
                <h4 className="text-warning">Term 3</h4>
                <small className="text-muted">Third Term Holiday</small>
                <ul className="list-unstyled mt-3">
                    <li>Applied Frontend Development</li>
                    <li>Integrating HTML, CSS & JavaScript</li>
                    <li>Personal Portfolio Development</li>
                    {/* <li>Career Readiness & Tech Pathways</li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-5 bg-white p-4 rounded border">
            <h5 className="text-center">Program Schedule</h5>
            <div className="row mt-3 text-center">
              <div className="col-sm-6 col-md-4">2 hours per session</div>
              <div className="col-sm-6 col-md-4">3 sessions per week</div>
              {/* <div className="col-sm-6 col-md-3">72 hours per term</div> */}
              <div className="col-sm-6 col-md-4">Flexible Timing</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{backgroundColor:"#0d0a2c"}} className="py-5 text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">Ready to Start Your Coding Journey?</h2>
          <p className="fs-5 mb-4">Join hundreds of students building their future with code.</p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <button className="btn btn-light btn-lg">Fee: Ugx 300,000/= </button>
            <a href="/signin" className="btn btn-outline-success btn-lg">Enroll Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};
