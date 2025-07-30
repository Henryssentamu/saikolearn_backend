import React from "react";
// import heroImage from "../../../../sist3.png";
import { HomeNav } from "../../../subcomponets/headers/homepage";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

export function IntroductionToProgramming() {
  return (
    <div className="min-vh-100 bg-dark text-white">
      <HomeNav />

      {/* Hero Section */}
      <section
        style={{
          height: "620px",
          backgroundImage: `url('/src/sist3.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="position-relative d-flex align-items-center justify-content-center text-center"
      >
        <div className="container">
          <h1 style={{ fontWeight: "900", fontSize: "36px" }} className="text-white">
            Introduction to Programming
          </h1>
          <p style={{ fontWeight: "500", fontSize: "26px" }} className="lead text-white">
            Your gateway to the fascinating realm of coding.
          </p>
          <p style={{ fontWeight: "400", fontSize: "21px" }} className="text-white">
            Duration: 12 Months | Self-paced
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5 px-3 bg-body text-dark">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-4">Course Overview</h2>
          <p className="text-center fs-5 text-muted mb-5">
            A flexible and comprehensive course designed for students, working professionals, and vacationists — with access to course
            resources beyond completion.
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-clock fs-1 text-primary mb-3"></i>
                  <h5 className="card-title">Learn at Your Pace</h5>
                  <p className="card-text">Self-paced over 12 months, ideal for busy schedules and flexible learning styles.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-person-video3 fs-1 text-success mb-3"></i>
                  <h5 className="card-title">Live Classes</h5>
                  <p className="card-text">Attend either Evening or Weekend live classes led by experienced mentors.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow h-100 text-center">
                <div className="card-body">
                  <i className="bi bi-award fs-1 text-warning mb-3"></i>
                  <h5 className="card-title">Certification</h5>
                  <p className="card-text">Get an internationally recognized certificate upon timely completion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-5 bg-light text-dark">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5">What You'll Learn</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="border rounded p-4 h-100">
                <h5 className="fw-bold mb-3">Core Curriculum (First 9 Months)</h5>
                <ul className="list-unstyled">
                  <li>• Programming Basics</li>
                  <li>• Object-Oriented Programming</li>
                  <li>• System Design</li>
                  <li>• Full-Stack Web App Project</li>
                </ul>
                <p className="small text-muted">Languages Used: Python, JavaScript</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border rounded p-4 h-100">
                <h5 className="fw-bold mb-3">Specialization Track (Final 3 Months)</h5>
                <ul className="list-unstyled">
                  <li>• Frontend Development (JS & CSS frameworks)</li>
                  <li>• OR Backend Development (Python/Django or Node.js)</li>
                  <li>• Build & Deploy a Specialized Project</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row text-center mt-5">
            <div className="col-md-4">
              <div className="bg-white border rounded py-4 h-100">
                <h6 className="text-primary fw-bold mb-2">Major Skills</h6>
                <ul className="list-unstyled">
                  <li>Problem Solving</li>
                  <li>System Architecture</li>
                  <li>Frontend & Backend Development</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white border rounded py-4 h-100">
                <h6 className="text-success fw-bold mb-2">Live Class Options</h6>
                <p className="mb-1">Evening Classes</p>
                <p className="mb-0">Weekend Classes</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white border rounded py-4 h-100">
                <h6 className="text-warning fw-bold mb-2">Course Fee</h6>
                <p className="fs-4 fw-semibold text-dark">UGX 500,000</p>
                <p className="text-muted small mb-0">One-time payment for full access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: "#0d0a2c" }} className="py-5 text-white text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">Ready to Start Your Coding Journey?</h2>
          <p className="fs-5 mb-4">Join hundreds of learners building their future with code.</p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <button className="btn btn-light btn-lg">Fee: UGX 500,000</button>
            <a href="/signin" className="btn btn-outline-success btn-lg">
              Enroll Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
