import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUserCircle, FaBook, FaCalendarAlt, FaQuestionCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link, useSubmit } from "react-router-dom";

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
  const [studentData, setstudentData] = useState([
    {
      studentnumber: "213324",
      name: "John Doe",
      institution: "ABC University",
      profilePic: "/pexels-energepic-com-27411-159888.jpg",
      enrolledCourses: [{ courseId: "12387w3s", courseName: "Introduction to software engineering " }],
      otherCourses: ["Artificial Intelligence"],
      events: {
        "2025-03-15": "Math Exam",
        "2025-03-20": "Project Submission",
      },
    },
  ]);
  // Header Component
  function Header() {
    const [show, setshow] = useState(false);

    return (
      <nav className="navbar navbar-expand-lg navbar-light  text-white p-3" style={{ backgroundColor: "#0d0a2c" }}>
        <a className="navbar-brand text-white" href="#">
          Saikolearn Student Portal
        </a>
        <div className="ms-auto d-flex align-items-center">
          {studentData.map((student) => {
            return (
              <span className="" key={student.studentnumber} style={{ marginRight: "10px" }}>
                {student.name}
              </span>
            );
          })}
          <FaUserCircle size={30} className="cursor-pointer" onClick={() => setshow((prev) => !prev)} />
        </div>
        {show && (
          <div className="position-absolute bg-white shadow rounded p-3" style={{ right: "10px", top: "50px" }}>
            <button className="btn btn-outline-primary w-100 mb-2">
              <FaCog /> Settings
            </button>
            <button className="btn btn-outline-danger w-100">
              <FaSignOutAlt /> Logout
            </button>
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
          {studentData.map((student) => {
            return (
              <div
                className="col-md-3 text-center p-3 rounded shadow-sm"
                key={student.studentnumber}
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <h5 className="mt-2">Saikolearn Academy</h5>
                <img src={student.profilePic} className="rounded-circle mt-2" alt="Student" style={{ width: "150px", height: "150px" }} />
              </div>
            );
          })}

          {/* Middle Section - Enrolled Programs & Calendar */}
          <div className="col-md-6">
            <h5>
              <FaBook /> Enrolled Programs
            </h5>
            <ul className="list-group mb-3">
              {studentData.map((student) =>
                student.enrolledCourses.map((course, index) => (
                  <li key={index} className="list-group-item">
                    <Link to={`/coursedashboard?courseId=${course.courseId}`}>{course.courseName}</Link>
                  </li>
                ))
              )}
            </ul>

            <h5 className="mt-3">
              <FaCalendarAlt /> Event Calendar
            </h5>
            <div className="border rounded p-3" style={{ minHeight: "250px" }}>
              <Calendar events={studentData[0].events} />
            </div>
          </div>

          {/* Right Section - Other Courses & Help Center */}
          <div className="col-md-3 p-3 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
            <h5>
              <FaBook /> Other Programs
            </h5>
            <ul className="list-group mb-3">
              {studentData.map((student) =>
                student.otherCourses.map((course, index) => (
                  <li key={index} className="list-group-item">
                    {course}
                  </li>
                ))
              )}
            </ul>
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
