import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styling/CollaborationSection.css"
import { HomeNav } from "../subcomponets/headers/homepage";
import { Footer } from "../subcomponets/footers/home";
import { apiUrl } from "../../env";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export function Home() {
  const [trendingCourses, setTrendingCourses] = useState([
    {
      courseId: "122",
      courseName: "INTRODUCTION TO PROGRAMMING",
      BreifDiscription: "This course is your gateway to the fascinating realm of coding.",
      Duration: "Duration 12 months",
      thumbnil: "/sist1.png",
      courseurl: "/programming"
    },
    {
      courseId: "123",
      courseName: "INTRODUCTION TO MACHINE LEARNING ",
      BreifDiscription: "This course is your gateway to the fascinating realm of Ai Engineering .",
      Duration: "Duration 12 months",
      thumbnil: "/sist2.png",
      courseurl: "/machinelearning"
    },
    {
      courseId: "124",
      courseName: "HIGH SCHOOL CODING PROGRAM",
      BreifDiscription: "This program is designed for high school students, tailored to their flexible schedules",
      Duration: "Duration 3 term holidays",
      thumbnil: "/pexels-harold-vasquez-853421-2653362.jpg",
      courseurl: "/highschoolcoding"
    },
  ]);
  // async function fetchCourses() {
  //   await fetch(`${apiUrl}schools/createcourse/`)
  //     .then(response =>{
  //       if(!response.ok){
  //         throw new Error("failed to fetch available courses")
  //       }
  //       return response.json()
  //     })
  //     .then(data =>{
  //       if(data){
  //         setTrendingCourses(data)
  //       }
  //     })
  //     .catch(error =>{
  //       console.log(error)
  //     })
    
  // }
  // useEffect(()=>{
  //   fetchCourses()
  // },[])
  const stylings = { fontSize: "18px" };
  return (
    <div>
      <div className="container-fluid banner-section">
        {/* navigation componet */}
        <HomeNav />
        {/* body */}
        <div className="container" style={{ marginTop: "75px" }}>
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
                  <a href="/signUp">
                    <button className="btn btn-outline-info text-white " style={{ padding: "5px 45px", marginBottom: "25px" }}>
                      Register
                    </button>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* <div className="row p-0 m-0 text-center ">
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
                <a
                  href="/introToProgramming"
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
      </div> */}
      <section className="trending-courses py-5">
      <Container>
        <h2 className="text-center poppins-black mb-3">Our Trending Programs</h2>
        <p className="text-center poppins-regular  mb-5 lead">
          Embark on a transformative career journey with real-world skills aligned to industry demands. Invest in practical knowledge, earn
          certifications in cutting-edge programs guided by top tech experts, and elevate your career trajectory.
        </p>
        <Row xs={1} md={2} lg={3} className="g-4">
          {trendingCourses.map((course) => (
            <Col key={course.courseId}>
              <Card className="h-100 shadow-lg border-0 course-card">
                <Card.Img
                  variant="top"
                  src={course.thumbnil}
                  alt={`${course.courseName} thumbnail`}
                  className="course-img"
                />
                <Card.Body className="d-flex flex-column text-center">
                  <Card.Title className="poppins-white mb-3">{course.courseName}</Card.Title>
                  <Card.Text className="poppins-regular  flex-grow-1">
                    {course.BreifDiscription}
                  </Card.Text>
                  <Card.Text className="poppins-regular  mb-4">
                    Duration: {course.Duration}
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    href={`${course.courseurl}`}
                    className="mt-auto"
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
      {/* <div className="row mt-5 text-center row-col-sm-1 row-col-md-2 ">
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
                Collaborate with Ssentamu Innovation Hub Of Science And Technology - SIST to revolutionize the tech talent landscape in Africa, impacting one learner at a time!
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
                  Back Ssentamu Innovation Hub Of Science And Technology - SIST's skilling, placement, and Microwork initiatives to ensure optimal talent connects with the finest
                  opportunities!
                </div>
                <div className="card-text poppins-medium mb-3 mt-3" style={{ fontSize: "22px" }}>
                  Why Become a Corporate Ally?
                </div>
                <div className="card-text poppins-regular " style={stylings}>
                  Strategically align skilled talent with premier opportunities through the Corporate Ally Program, investing in a finely
                  tuned talent pipeline for your industry's evolving needs. Your support enhances Ssentamu Innovation Hub Of Science And Technology - SIST's renowned skilling programs,
                  ensuring a continuous influx of industry-ready professionals. Shape a workforce that exceeds expectations by partnering
                  with Ssentamu Innovation Hub Of Science And Technology - SIST for optimal placement solutions.
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
              Ssentamu Innovation Hub Of Science And Technology - SIST collaborates with public, private, and development sectors to equip, enhance skills, and position tech talent in
              rewarding employment opportunities, both locally and globally.
            </div>
            <div className="text m-1 p-1" style={stylings}>
              Our collaborators enable this by backing skilling initiatives, sponsoring underprivileged students, sharing resources for
              Ssentamu Innovation Hub Of Science And Technology - SIST programs to reach underserved communities, and offering workspaces to mentor and hire our talent.
            </div>
            <div className="card-text text-center poppins-regular mb-3 mt-3" style={stylings}>
              Our Grant Partners
            </div>
            <div className="text p-1" style={stylings}>
              Grant Partners fuel student success by sponsoring course enrollment and supporting Ssentamu Innovation Hub Of Science And Technology - SIST's operations financially. Their
              generosity unlocks educational opportunities, shaping tech talent and fostering innovation.
            </div>
            <button className="btn btn-outline-success m-3 ">Become A Partner</button>
          </div>
        </div>
      </div> */}
      <section className="collaboration-section py-5">
        <Container>
          <h2 className="text-center mb-5 poppins-black collaboration-title">
            Collaborate with us for collective growth
          </h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            {/* Grant Partner Card */}
            <Col>
              <Card className="h-100 shadow-lg border-0">
                <Card.Body className="text-center">
                  <Card.Title className="poppins-medium mb-3">Grant Partner</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Collaborate with Ssentamu Innovation Hub Of Science And Technology - SIST to revolutionize Africa's tech talent landscape, impacting one learner at a time!
                  </Card.Text>
                  <Card.Subtitle className="poppins-medium mb-3">
                    Why Invest in the Grant Partner Initiative?
                  </Card.Subtitle>
                  <Card.Text className="poppins-regular text-muted">
                    Reshape Africa's tech landscape by fostering innovation and meeting the demand for skilled professionals. Invest in transformative education to break barriers and create opportunities. Support cutting-edge tech and innovative teaching methods to cultivate a thriving, industry-aligned environment.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Corporate Ally Card */}
            <Col>
              <Card className="h-100 shadow-lg border-0">
                <Card.Body className="text-center">
                  <Card.Title className="poppins-medium mb-3">Corporate Ally</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    Support Ssentamu Innovation Hub Of Science And Technology - SIST's skilling, placement, and microwork initiatives to connect top talent with premier opportunities!
                  </Card.Text>
                  <Card.Subtitle className="poppins-medium mb-3">
                    Why Become a Corporate Ally?
                  </Card.Subtitle>
                  <Card.Text className="poppins-regular text-muted">
                    Align skilled talent with industry needs through the Corporate Ally Program. Enhance Ssentamu Innovation Hub Of Science And Technology - SIST's skilling programs to ensure a continuous pipeline of industry-ready professionals. Shape a workforce that exceeds expectations with optimal placement solutions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Support Network Card */}
            <Col>
              <Card className="h-100 shadow-lg border-0">
                <Card.Body className="text-center">
                  <Card.Title className="poppins-black mb-3">Our Support Network</Card.Title>
                  <Card.Subtitle className="poppins-regular mb-3">Our Corporate Allies</Card.Subtitle>
                  <Card.Text className="text-muted mb-3">
                    Ssentamu Innovation Hub Of Science And Technology - SIST collaborates with public, private, and development sectors to equip and position tech talent in rewarding local and global opportunities.
                  </Card.Text>
                  <Card.Text className="text-muted mb-4">
                    Our allies support skilling initiatives, sponsor underprivileged students, share resources for underserved communities, and provide mentorship and hiring opportunities.
                  </Card.Text>
                  <Card.Subtitle className="poppins-regular mb-3">Our Grant Partners</Card.Subtitle>
                  <Card.Text className="text-muted mb-4">
                    Grant Partners fuel student success by sponsoring course enrollment and supporting Ssentamu Innovation Hub Of Science And Technology - SIST's operations, unlocking educational opportunities and fostering innovation.
                  </Card.Text>
                  <Button variant="outline-success" href="/partner">Become a Partner</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="row m-5 d-flex flex-row justify-content-center align-items-center">
        <section className="our-partner-display-section">
          <div className="our-partner-display-heading">
            <h2 className="text text-center poppins-black m-3" style={stylings}>
              OUR PARTNERS
            </h2>
            <div id="partner-tagline" className="text-muted text-center poppins-regular" style={stylings}>
              Elevating Tech Futures: Partners in Transformative Talent!
            </div>
          </div>

          <div className="presentation">
            <div id="partnerCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h1>SISI</h1>
                  <p>STAY IN SCHOOL INITIATIVE</p>
                </div>
                <div className="carousel-item">
                  <h1>Partner 2</h1>
                  <p>Your content goes here.</p>
                </div>
                <div className="carousel-item">
                  <h1>Partner 3</h1>
                  <p>Your content goes here.</p>
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
        </section>
      </div>
      {/* footer */}

      <Footer />
    </div>
  );
}
