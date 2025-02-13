import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { HomeNav } from "../subcomponets/headers/homepage";

export function Home() {
  return (
    <div>
      <div className="container-fluid banner-section">
        {/* navigation componet */}
        <HomeNav />
        {/* body */}
        <div className="container" style={{ marginTop: "81px" }}>
          <div className="row ">
            <section className="banner-details-containr text-white">
              <div className="content-on-banner">
                <div className="poppins-bold  " style={{ fontSize: "40px", fontWeight: "bold" }}>
                  Unlocking Potential <br></br> in the Digital Era
                </div>
                <div id="banner-details-register" style={{ fontFamily: "open+sans", fontSize: "26px", fontWeight: "500" }}>
                  Transform your future By Registering <br /> for upcoming intake.
                </div>
                <div className="mt-5">
                  <a href="#">
                    <button className="btn btn-outline-info text-white " style={{ padding: "5px 45px" }}>
                      Register
                    </button>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="row p-0 m-0 text-center">
        <div className="trendingCourse">Our Trending Courses</div>
        <div className="trendingCourseDescription">
          Commence on a transformative career journey by acquiring real-world skills that align with industry demands. Invest in practical
          knowledge to enhance personal and professional growth, reshaping your career trajectory. Register now to earn certifications in
          cutting-edge programs, guided by industry experts from top tech companies. Elevate your skills and set the course for a successful
          career journey
        </div>
      </div>
    </div>
  );
}
