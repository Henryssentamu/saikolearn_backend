import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React from "react";
import { FaCog } from "react-icons/fa";

export function AdminDashboard() {
  const adminName = "John Doe"; // Replace with actual admin name from state/context

  const dataSummary = {
    schools: 10,
    courses: 25,
    students: 500,
    tutors: 30,
    employees: 20,
    income: 50000,
    expenditure: 30000,
    targetIncome: 60000,
    targetExpenditure: 25000,
  };

  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Admin Panel
          </a>
          <div className="ml-auto d-flex flex-row ">
            <a className="nav-link text-white" href="#">
              {adminName}
            </a>
            <a className="nav-link" href="#" style={{ color: "white" }}>
              <FaCog />
            </a>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2 bg-dark p-3 min-vh-100">
            <nav className="nav flex-column">
              {["School", "Employees", "Registration"].map((item) => (
                <a className=" btn  btn-outline-info mb-3" key={item} href={`/${item.toLowerCase()}`}>
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="col-md-10 p-4">
            {/* Statistical Summary */}
            <div className="row">
              {Object.entries(dataSummary)
                .slice(0, 5)
                .map(([key, value]) => (
                  <div
                    className="col 
				  mb-2"
                    key={key}
                  >
                    <div className="card shadow-sm p-3">
                      <div className="card-body">
                        <h5 className="card-title text-primary text-uppercase">{key}</h5>
                        <p className="card-text display-4 font-weight-bold">{value}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Financial Summary */}
            <div className="row mt-3">
              {[
                { label: "Income", value: dataSummary.income, color: "success" },
                { label: "Expenditure", value: dataSummary.expenditure, color: "danger" },
                { label: "Target Income", value: dataSummary.targetIncome, color: "primary" },
                { label: "Target Expenditure", value: dataSummary.targetExpenditure, color: "warning" },
              ].map(({ label, value, color }) => (
                <div className="col-md-3 mb-3" key={label}>
                  <div className={`card shadow-sm border-${color}`}>
                    <div className="card-body">
                      <h5 className={`card-title text-${color}`}>{label}</h5>
                      <p className="card-text h3">${value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
