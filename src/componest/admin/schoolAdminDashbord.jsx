import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaCog, FaPlus, FaTrash } from "react-icons/fa";

export function AdminSchoolDashboard() {
  const adminName = "John Doe"; // Replace with actual admin data

  // Sample list of schools (Replace with API data if needed)
  const schools = [
    { id: 1, name: "Schoo of Datascience", location: "New York" },
    { id: 2, name: "School Of Software Engineering", location: "California" },
  ];

  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Admin Panel
          </a>
          <div className="ml-auto">
            <a className="nav-link" href="#">
              {adminName}
            </a>
            <a className="nav-link" href="/admindashboard" style={{ color: "white" }}>
              Back
            </a>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2 bg-light p-3 min-vh-100">
            <nav className="nav flex-column">
              <a className="nav-link text-primary" href="#add-school">
                <FaPlus className="me-2" /> Add School
              </a>
              <a className="nav-link text-danger" href="#delete-school">
                <FaTrash className="me-2" /> Delete School
              </a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="col-md-10 p-4">
            <h3 className="mb-4">Available Schools</h3>

            {/* School Cards */}
            <div className="row">
              {schools.map((school) => (
                <div key={school.id} className="col-md-4 mb-4">
                  <a href={`/school-dashboard/${school.id}`} className="text-decoration-none">
                    <div className="card shadow-sm h-100">
                      <div className="card-body text-center">
                        <h5 className="card-title text-primary">{school.name}</h5>
                        {/* <p className="card-text text-muted">{school.location}</p> */}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
