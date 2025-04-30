import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { apiUrl } from "../../../env";

// Header Component
function Header() {
  const [show, setshow] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">
          Student Portal
        </a>
        <div className="ml-auto d-flex">
          <a className="nav-link" href="/studentportal" style={{ color: "white" }}>
            Back
          </a>
        </div>
      </div>
    </nav>
  );
}

export function ProgramCourses() {
  const [enrolledInCourses, setenrolledInCourses] = useState([]);
  const location = useLocation();
  const schoolId = location.state?.schoolId || localStorage.getItem("schoolId");
  const student_id = localStorage.getItem("studentId");

  const [courses, setCourses] = useState([]);
  const [cssloader, activatecssloader] = useState(false);
  async function fetchAvailableCourses() {
    activatecssloader(true);
    return await fetch(`${apiUrl}listcourseandcohortdetailsforstudents/?SchoolId=${schoolId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // this will be activated when we activate users login token, so we attach it on api call for authentication
        // Authorization:`Bearer ${token}`
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("school details api call failed");
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setCourses(data);

          activatecssloader(false);
          return data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function fetchStudentDetails() {
    const student_id = localStorage.getItem("studentId");

    return await fetch(`${apiUrl}accademicdetails/?studentId=${student_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("api failed to fetch student data");
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setenrolledInCourses(data.enrolledCourses.map((courseobj) => courseobj.courseId));

          return true;
        }
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

  useEffect(() => {
    fetchAvailableCourses();
    fetchStudentDetails();
  }, []);

  const [selectedCourse, setSelectedCourse] = useState(null);

  async function handleEnroll() {
    const enroll_data = {
      StudentId: student_id,
      CourseId: selectedCourse.courseId,
      CohortId: selectedCourse.cohorts[0]["CohortId"],
    };
    await fetch(`${apiUrl}enrollintocourse/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enroll_data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("server error while sending a post request for student enrolled data");
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          window.location.href = "/studentportal";
        }
      })
      .then((error) => {
        console.log(error);
      });

    setSelectedCourse(null);
  }
  console.log(courses);
  console.log(
    "courses:",
    courses.map((c) => ({ id: c.CourseId, name: c.CourseName }))
  );

  return (
    <div>
      <Header />

      {/* css loader */}
      {cssloader && (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div className="container py-5">
        <h2 className="text-center mb-4">Available Courses</h2>

        {courses.length === 0 ? (
          <div className="alert alert-warning text-center">No courses available.</div>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {courses.map((course) => (
              <div className="col" key={course.CourseId}>
                <div className="card shadow-sm border-light rounded h-100">
                  <div className="card-header text-center text-white bg-primary">
                    <FaBook className="me-2" />
                    {course.CourseName}
                  </div>
                  <div className="card-body">
                    <p>
                      <strong>Instructor:</strong> {course.CourseInstractor}
                    </p>

                    {enrolledInCourses.map(String).includes(String(course.CourseId)) ? (
                      <div className="alert alert-info text-center">You are already enrolled in this course</div>
                    ) : (
                      <button className="btn btn-success w-100" onClick={() => setSelectedCourse(course)}>
                        Enroll
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Enrollment Modal */}
        {selectedCourse && (
          <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Enroll in Course</h5>
                  <button className="btn-close" onClick={() => setSelectedCourse(null)}></button>
                </div>
                <div className="modal-body">
                  <p>
                    Do you want to enroll in <strong>{selectedCourse.CourseName}</strong>?
                  </p>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setSelectedCourse(null)}>
                    Cancel
                  </button>
                  <button className="btn btn-primary" onClick={handleEnroll}>
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
