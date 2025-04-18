import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
  const location = useLocation();
  const schoolId = location.state?.schoolId;
  const [coursesList, setCourses] = useState([]);

  const [programs] = useState({
    softwareEngineering: {
      schoolId: "12233",
      courseDetails: [{ courseId: "233333", courseName: "Introduction To Programming" }],
    },
    dataScience: {
      schoolId: "156666",
      courseDetails: [{ courseId: "1233", courseName: "Introduction To Machine Learning" }],
    },
  });

  async function fetchAvailableCourses() {
    console.log(schoolId);
    return await fetch(`${apiUrl}student/coursedetails/?SchoolId=${schoolId}`, {
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
        setCourses(data);
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleEnroll = async () => {
    if (!selectedCourse) return;

    try {
      const response = await fetch("https://your-backend-api.com/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId: selectedCourse.courseId }),
      });

      if (!response.ok) throw new Error("Failed to enroll");

      const data = await response.json();
      alert(`Enrolled in course: ${selectedCourse.courseName}`);
      console.log("Response:", data);
      setSelectedCourse(null);
    } catch (error) {
      console.error("Enrollment error:", error);
      alert("Enrollment failed.");
    }
  };

  const filteredEntries = Object.entries(programs).filter(([, programData]) => programData.schoolId === schoolId);
  // useEffect(() => {
  //   fetchAvailableCourses;
  // }, []);
  return (
    <div>
      <Header />
      <div className="container py-5">
        <h2 className="text-center mb-4">Program Details</h2>

        {filteredEntries.length === 0 ? (
          <div className="alert alert-warning text-center">No program found for school ID: {schoolId}</div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {filteredEntries.map(([programKey, programData]) => (
              <div className="col" key={programKey}>
                <div className="card shadow-sm border-light rounded">
                  <div
                    className={`card-header text-center text-white ${programKey === "softwareEngineering" ? "bg-primary" : "bg-success"}`}
                  >
                    <FaBook className="me-2" />
                    {programKey.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </div>
                  <div className="card-body">
                    <ul className="list-group">
                      {programData.courseDetails.map((course) => (
                        <li
                          key={course.courseId}
                          className="list-group-item list-group-item-action"
                          onClick={() => setSelectedCourse(course)}
                          role="button"
                        >
                          {course.courseName}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for enrolling */}
      {selectedCourse && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enroll in Course</h5>
                <button className="btn-close" onClick={() => setSelectedCourse(null)} />
              </div>
              <div className="modal-body">
                <p>
                  Do you want to enroll in <strong>{selectedCourse.courseName}</strong>?
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
  );
}
