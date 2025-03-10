import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function RecruitEmployess() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "Teaching Staff",
    salary: "Volunteer",
    profilePic: null,
    resume: null,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Assuming 'employees' state exists for saving employee data
    // setEmployees([...employees, { id: employees.length + 1, ...formData }]);
    setFormData({
      name: "",
      phone: "",
      email: "",
      category: "Teaching Staff",
      salary: "Volunteer",
      profilePic: null,
      resume: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Admin Panel
          </a>
          <div className="ml-auto d-flex">
            <a className="nav-link" href="/employees" style={{ color: "white" }}>
              Back
            </a>
          </div>
        </div>
      </nav>

      {/* Recruitment Form Section */}
      <div className="container mt-5">
        <h3 className="text-center mb-4">Recruit Employee</h3>
        <form onSubmit={handleFormSubmit} className="shadow-sm p-4 rounded bg-light">
          {/* Bio Data Section */}
          <div className="mb-3">
            <h5>Bio Data</h5>
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Salary Section */}
          <div className="mb-3">
            <h5>Salary</h5>
            <label htmlFor="salary" className="form-label">
              Salary Type
            </label>
            <select id="salary" name="salary" className="form-control" value={formData.salary} onChange={handleInputChange}>
              <option value="Volunteer">Volunteer</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
            </select>
          </div>

          {/* Document Section */}
          <div className="mb-3">
            <h5>Documents</h5>
            <label htmlFor="profilePic" className="form-label">
              Profile Picture
            </label>
            <input type="file" className="form-control" id="profilePic" name="profilePic" accept="image/*" onChange={handleFileChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="resume" className="form-label">
              Resume (PDF)
            </label>
            <input type="file" className="form-control" id="resume" name="resume" accept="application/pdf" onChange={handleFileChange} />
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary w-50">
              Recruit Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
