import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { HomeNav } from "../subcomponets/headers/homepage";
import { Footer } from "../subcomponets/footers/home";

import { useState, useEffect } from "react";

export function SchoolOfDataScience() {
  const [trendingCourses, setTrendingCourses] = useState([
    {
      courseId: "122",
      courseName: "INTRODUCTION TO MACHINE LEARNING",
      BreifDiscription: "This course is your gateway to the fascinating realm of Data Science And Ai.",
      Duration: "Duration 12 months",
      thumbnil: "/sist3.png",
      courseurl: "/machinelearning"
    },
  ]);
  return (
    <div>
      <HomeNav />
      <div className="container-fluid schoolOfDataScience">
        <div className="banner-content ">
          <div className="poppins-black m-3" style={{ fontSize: "26px" }}>
            Welcome to school of Data Science!
          </div>
          <div className="poppins-regular m-3">
            This program serves as your gateway to <br /> unraveling the intricacies of software <br /> engineering, where algorithms,
            coding, <br /> and statistical principles converge to <br /> uncover valuable insights and facilitate <br /> informed
            decision-making. This program is your passport to <br /> unlocking the mysteries of data, where algorithms, <br /> statistics,
            and programming converge to extract <br /> valuable insights and drive informed decision-making.
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 " style={{ marginTop: "130px", padding: "10px", gap: "120px" }}>
        <div className=" col video-section" style={{ width: "400px" }}>
          <iframe
            src="https://www.youtube.com/embed/DInMru2Eq6E?si=U3c1of8xXx-TqDOg"
            frameborder="0"
            width={"100%"}
            height={"315px"}
          ></iframe>
        </div>
        <div className="col">
          <h1 className="poppins-black">THE SCHOOL OF DATA SCIENCE</h1>
          <p className="poppins-regular" style={{ fontSize: "16px" }}>
            Welcome to the School of Data Science, where we provide a comprehensive array of technical courses meticulously crafted to
            empower learners with the essential knowledge and skills needed to launch their careers and excel on a global scale. Our diverse
            range of technical courses is designed to prepare you for the initiation, transition, or advancement in your tech career. With a
            focus on ensuring that students are fully equipped, we integrate dynamic self-paced learning, interactive live classes, and
            collaborative peer-to-peer training to offer an immersive educational experience
          </p>

          <div className="d-flex align-items-center mt-3">
            <img src="/ssentamu1.jpeg" alt="Facebook" className="me-3" width={"40px"} height={"40px"} />
            <div>
              <div className="fw-bold">Mr. Henry ssentamu</div>
              <div className="text-muted">School Coordinator</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-5">
        <div className="presentation">
          <div
            id="partnerCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
          >
            <h2>Our Intakes Calender</h2>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h1>January Intake</h1>
                <p>5th to 20th</p>
              </div>
              <div className="carousel-item">
                <h1>May</h1>
                <p>5th to 20th </p>
              </div>
              <div className="carousel-item">
                <h1>Sebtember</h1>
                <p>5th to 20th</p>
              </div>
            </div>

            {/* <!-- Hide navigation buttons on small screens --> */}
            <button
              className="carousel-control-prev d-none d-md-block"
              type="button"
              data-bs-target="#partnerCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next d-none d-md-block"
              type="button"
              data-bs-target="#partnerCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="text-center poppins-black " style={{ fontSize: "36px" }}>
          Avilable Courses
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 row cols-lg-3 d-flex  justify-content-center align-items-center p-3">
        {trendingCourses.map((courseObj, index) => {
          return (
            <div key={index} className="col " style={{ width: "500px", margin: "5px 15px", padding: "10px 10px" }}>
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
                <a
                  href={courseObj.courseurl}
                  data-course-id={courseObj.courseId}
                  className="btn btn-outline-light "
                  style={{ margin: "15px 10px" }}
                >
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
