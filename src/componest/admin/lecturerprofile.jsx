import React from "react";
import { useLocation } from "react-router-dom";

export function LecturerProfile() {
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const id = param.get("idNo");

  const lecturerlist = [
    {
      id: "1",
      name: "Dr. John Doe",
      email: "johndoe@example.com",
      department: "SoftwreEngineering",
      phone: "+1234567890",
      profilePicture: "/pexels-energepic-com-27411-159888.jpg",
      courses: ["CS101", "CS102", "AI101"],
      salary: "$5000",
      bonus: "$500",
    },
    {
      id: "2",
      name: "Prof jane smith",
      email: "janesmith@example.com",
      department: "DataScience",
      phone: "+1234567890",
      profilePicture: "/pexels-energepic-com-27411-159888.jpg",
      courses: ["CS101", "CS102", "AI101"],
      salary: "$5000",
      bonus: "$500",
    },
  ];

  const lecturer = lecturerlist.find((tutor) => tutor.id === id);
  if (!lecturer) {
    return (
      <div className="container">
        <div className="alert alert-danger">Lecturer not found</div>
      </div>
    );
  }
  return (
    <div>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Admin Panel
          </a>
          <div className="ml-auto">
            <a className="nav-link" href="/school" style={{ color: "white" }}>
              Back
            </a>
          </div>
        </div>
      </nav>
      {/* body */}

      <div className="container">
        <div className="row">
          {/* Profile Picture and Bio Data */}
          <div className="col-md-4">
            <div className="card">
              {/* <img
              src={lecturer.profilePicture}
              alt="Lecturer Profile"
              className="card-img-top"
              style={{ maxWidth: "100%", height: "auto" }}
            /> */}
              <div className="card-body">
                <h5 className="card-title">{lecturer.name}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {lecturer.email}
                </p>
                <p className="card-text">
                  <strong>Department:</strong> {lecturer.department}
                </p>
                <p className="card-text">
                  <strong>Phone:</strong> {lecturer.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Courses and Salary */}
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Courses Taught</h5>
                <ul>
                  {lecturer.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Salary Details</h5>
                <p className="card-text">
                  <strong>Monthly Salary:</strong> {lecturer.salary}
                </p>
                <p className="card-text">
                  <strong>Salary Bonus:</strong> {lecturer.bonus}
                </p>
              </div>
            </div>

            {/* Terminating Contract */}
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Terminating Contract</h5>
                <button className="btn btn-danger" onClick={() => alert("Contract termination process started")}>
                  Terminate Contract
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
