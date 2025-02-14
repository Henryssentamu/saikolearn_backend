import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { HomeNav } from "../subcomponets/headers/homepage";
import { useState, useEffect } from "react";

export function Home() {
  const [trendingCourses, setTrendingCourses] = useState([
    {
      courseId: "122",
      courseName: "INTRODUCTION TO PROGRAMMING",
      BreifDiscription: "This course is your gateway to the fascinating realm of coding.",
      Duration: "Duration 12 months",
      thumbnil: "/pexels-harold-vasquez-853421-2653362.jpg",
    },
    {
      courseId: "123",
      courseName: "INTRODUCTION TO PROGRAMMING",
      BreifDiscription: "This course is your gateway to the fascinating realm of coding.",
      Duration: "Duration 12 months",
      thumbnil: "/pexels-harold-vasquez-853421-2653362.jpg",
    },
    {
      courseId: "124",
      courseName: "INTRODUCTION TO PROGRAMMING",
      BreifDiscription: "This course is your gateway to the fascinating realm of coding.",
      Duration: "Duration 12 months",
      thumbnil: "/pexels-harold-vasquez-853421-2653362.jpg",
    },
  ]);

  const stylings = { fontSize: "18px" };
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
                    <button className="btn btn-outline-info text-white " style={{ padding: "5px 45px", marginBottom: "15px" }}>
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
        <div className="trendingCourse poppins-black" style={{ fontSize: "26px", marginTop: "40px" }}>
          Our Trending Courses
        </div>
        <div className="trendingCourseDescription poppins-regular " style={{ fontSize: "20px" }}>
          Commence on a transformative career journey by acquiring real-world skills that align with industry demands. Invest in practical
          knowledge to enhance personal and professional growth, reshaping your career trajectory. Register now to earn certifications in
          cutting-edge programs, guided by industry experts from top tech companies. Elevate your skills and set the course for a successful
          career journey
        </div>
      </div>
      <div
        className="row trendingCourses-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
          marginTop: "50px",
          marginLeft: "0px",
          marginRight: "0px",
        }}
      >
        {trendingCourses.map((courseObj, index) => {
          return (
            <div key={index} className="col">
              <div className="card shadow-lg " style={{ border: "none", backgroundColor: "#002b56", color: "white" }}>
                <img src={courseObj.thumbnil} alt="course thumbnail" className="card-img-top" style={{ width: "inherit" }} />
                <div className="card-body">
                  <div className="row text-center">
                    <div className="card-title poppins-black" style={{ fontSize: "21px" }}>
                      {courseObj.courseName}
                    </div>
                    <div className="card-text poppins-regular" style={{ fontSizes: "21px" }}>
                      {courseObj.BreifDiscription}
                    </div>
                    <div className="card-text" style={{ fontSizes: "21px", marginTop: "15px" }}>
                      {courseObj.Duration}
                    </div>
                  </div>
                </div>
                <a href="/course" data-course-id={courseObj.courseId} className="btn btn-outline-light " style={{ margin: "15px 10px" }}>
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row mt-5 text-center">
        <div className="mb-5 poppins-black p-3" style={{ fontSize: "26px" }}>
          Collaborate with us as we navigate a journey toward collective growth
        </div>
        <div className="col m-3" style={{ display: "gride", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr)" }}>
          <div className="card shadow-lg " style={{ border: "none" }}>
            <div className="card-title text-center poppins-medium " style={{ fontSize: "26px" }}>
              Grant Partner
            </div>
            <div className="card-body">
              <div className="card-title text-center" style={stylings}>
                Collaborate with saikolearn to revolutionize the tech talent landscape in Africa, impacting one learner at a time!
              </div>
              <div className="card-text poppins-medium mb-3 mt-3 " style={{ fontSize: "22px" }}>
                Why Invest in the Grant Partner Initiative?
              </div>
              <div className="card-text poppins-regular " style={stylings}>
                Strategically reshape Africa's tech landscape with the Grant Partner Initiative, fostering innovation and meeting the demand
                for skilled professionals. Invest for empowerment through transformative education, breaking barriers, and creating
                opportunities. Revolutionize learning with cutting-edge tech and innovative teaching, cultivating a thriving environment
                aligned with industry demands.
              </div>
            </div>
          </div>

          <div className="col m-3" style={{ display: "gride", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr)" }}>
            <div className="card shadow-lg " style={{ border: "none" }}>
              <div className="card-title text-center poppins-medium " style={{ fontSize: "26px" }}>
                Corporate Ally
              </div>
              <div className="card-body">
                <div className="card-text text-center" style={stylings}>
                  Back saikolearn's skilling, placement, and Microwork initiatives to ensure optimal talent connects with the finest
                  opportunities!
                </div>
                <div className="card-text poppins-medium mb-3 mt-3" style={{ fontSize: "22px" }}>
                  Why Become a Corporate Ally?
                </div>
                <div className="card-text poppins-regular " style={stylings}>
                  Strategically align skilled talent with premier opportunities through the Corporate Ally Program, investing in a finely
                  tuned talent pipeline for your industry's evolving needs. Your support enhances saikolearn's renowned skilling programs,
                  ensuring a continuous influx of industry-ready professionals. Shape a workforce that exceeds expectations by partnering
                  with saikolearn for optimal placement solutions.
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-lg text-center m-3" style={{ border: "none" }}>
            <div className="card-text poppins-black p-2" style={{ fontSize: "26px" }}>
              OUR SURPORT NETWORK
            </div>
            <div className="text-center poppins-regular mb-3 mt-3" style={stylings}>
              Our Corporate Ally
            </div>
            <div className="text m-1 p-1" style={stylings}>
              saikolearn collaborates with public, private, and development sectors to equip, enhance skills, and position tech talent in
              rewarding employment opportunities, both locally and globally.
            </div>
            <div className="text m-1 p-1" style={stylings}>
              Our collaborators enable this by backing skilling initiatives, sponsoring underprivileged students, sharing resources for
              saikolearn programs to reach underserved communities, and offering workspaces to mentor and hire our talent.
            </div>
            <div className="card-text text-center poppins-regular mb-3 mt-3" style={stylings}>
              Our Grant Partners
            </div>
            <div className="text p-1" style={stylings}>
              Grant Partners fuel student success by sponsoring course enrollment and supporting saikolearn's operations financially. Their
              generosity unlocks educational opportunities, shaping tech talent and fostering innovation.
            </div>
            <button className="btn btn-outline-success m-3 ">Become A Partner</button>
          </div>
        </div>
      </div>

      <div className="row m-5 d-flex flex-row justify-content-center align-items-center">
        <div className="text-center poppins-black m-3" style={stylings}>
          OUR PARTNERS
        </div>
        <div className="text-center poppins-regular" style={stylings}>
          Elevating Tech Futures: Partners in Transformative Talent!
        </div>
        {/* slides  */}
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          style={{ width: "4000px" }}
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/techimage.jpeg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Nisa Financing </h5>
                <p>This Provide us with internship placements .</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="/techimage.jpeg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Nimlang Ltd</h5>
                <p>Coprate ally.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="/techimage.jpeg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Nisa Financing</h5>
                <p>This Provide us with internship placements .</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
