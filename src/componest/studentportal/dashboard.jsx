import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaUserCircle, FaBook, FaCalendarAlt, FaQuestionCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link, useSubmit } from "react-router-dom";
import { apiUrl } from "../../../env";
import { fetchWithAuth } from "../../assets/tokenservice";
import { useLocation, useNavigate } from "react-router-dom";

// Calendar Component

const Calendar = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="text-center">
      {/* Calendar Grid */}
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {[...Array(30)].map((_, i) => {
          const date = `2025-03-${(i + 1).toString().padStart(2, "0")}`;
          return (
            <button
              key={date}
              className={`btn ${selectedDate === date ? "btn-primary" : "btn-outline-primary"} rounded-circle`}
              style={{ width: "40px", height: "40px" }}
              onClick={() => handleDateClick(date)}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      {/* Event Display */}
      <div className="mt-3 p-2 border rounded bg-light">
        <strong>{selectedDate ? `Event on ${selectedDate}:` : "Select a date to view events"}</strong>
        <p className="mb-0">{selectedDate ? events[selectedDate] || "No events scheduled" : ""}</p>
      </div>
    </div>
  );
};

// Main App Component
export function Studentportal() {
  // bellow is how data should be stratured from the api
  const NavigateWithSchoolId = useNavigate();
  const location = useLocation();
  const studentId = location.state?.studentId || localStorage.getItem("studentId");
  const [studentData, setstudentData] = useState({});
  const [programs] = useState({
    softwareEngineering: [{ courseId: "233333", CourseName: "Introduction To Programing" }],
    dataScience: [{ courseId: "1233", CourseName: "Introduction To Machine Learning" }],
  });
  const [schools, setSchools] = useState([]);

  async function fetchAvailableSchools() {
    return await fetch(`${apiUrl}schooldetails/`, {
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
          setSchools(data);
        }
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function fetchStudentDetails() {
    // const stringedStudentId = new URLSearchParams(studentId).toString();

    return await fetch(`${apiUrl}accademicdetails/?studentId=${studentId}`, {
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
          setstudentData(data);
          localStorage.setItem("enrolledInCourses", JSON.stringify(data.enrolledCourses));
          // console.log(data);
          return true;
        }
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

  useEffect(() => {
    // fetchWithAuth(fetchStudentDetails);
    fetchStudentDetails();
    fetchAvailableSchools();
  }, []);

  // Header Component
  function Header() {
    const [show, setshow] = useState(false);

    return (
      <nav className="navbar navbar-expand-lg navbar-light  text-white p-3" style={{ backgroundColor: "#0d0a2c" }}>
        <a className="navbar-brand text-white" href="#">
          Saikolearn Student Portal
        </a>
        <div className="ms-auto d-flex align-items-center">
          <div>
            <span className="" style={{ marginRight: "10px" }}>
              {studentData?.bioData?.SecondName}
            </span>
            {studentData?.bioData?.profilePic ? (
              <img
                src={studentData.bioData.profilePic}
                className="rounded-circle mt-2"
                alt="Student"
                style={{ width: "50px", height: "50px" }}
                onClick={() => setshow((prev) => !prev)}
              />
            ) : (
              <FaUserCircle size={30} className="cursor-pointer" onClick={() => setshow((prev) => !prev)} />
            )}
          </div>
        </div>
        {show && (
          <div className="position-absolute bg-white shadow rounded p-3" style={{ right: "10px", top: "50px" }}>
            <button className="btn btn-outline-primary w-100 mb-2">
              <FaCog /> Settings
            </button>
            <a href="/" className="btn btn-outline-danger w-100">
              <FaSignOutAlt /> Logout
            </a>
          </div>
        )}
      </nav>
    );
  }

  function Body() {
    return (
      <div className="container mt-4">
        <div className="row g-4">
          {/* Left Section */}
          <div className="col-md-3 text-center p-3 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
            <h5 className="mt-2">Saikolearn Academy</h5>

            {/* <img src={student.profilePic} className="rounded-circle mt-2" alt="Student" style={{ width: "150px", height: "150px" }} /> */}
          </div>

          {/* Middle Section - Enrolled Programs & Calendar */}
          <div className="col-md-6">
            <h5>
              <FaBook /> Enrolled Programs
            </h5>
            <ul className="list-group mb-3">
              {studentData.enrolledCourses && studentData.enrolledCourses.length > 0 ? (
                studentData.enrolledCourses.map((course, index) => {
                  return (
                    <div className="list-group-item" key={index}>
                      <Link to={`/coursedashboard?courseId=${course.courseId}`}>{course.courseName}</Link>
                    </div>
                  );
                })
              ) : (
                <div>Enroll in Our Programs From 'Other Program ' Section </div>
              )}
            </ul>

            {studentData.events && (
              <div>
                <h5 className="mt-3">
                  <FaCalendarAlt /> Event Calendar
                </h5>
                <div className="border rounded p-3" style={{ minHeight: "250px" }}>
                  <Calendar events={studentData.events} />
                </div>{" "}
              </div>
            )}
          </div>

          {/* Right Section - Other Courses & Help Center */}
          <div className="col-md-3 p-3 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="programDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaBook /> Other Programs
              </button>

              <ul
                className="dropdown-menu"
                aria-labelledby="programDropdown"
                style={{ alignItems: "center", margin: "10px", alignContent: "center" }}
              >
                {schools &&
                  schools.map((school) => (
                    <li key={school.SchoolId} className="p-3">
                      <div
                        onClick={() => {
                          localStorage.setItem("schoolId", school.schoolId);
                        }}
                      >
                        <Link to="/programs" state={{ schoolId: school.SchoolId }}>
                          <FaBook /> {school.SchoolName}
                        </Link>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>

            <h5 className="mt-3">
              <FaQuestionCircle /> Help Center
            </h5>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}
