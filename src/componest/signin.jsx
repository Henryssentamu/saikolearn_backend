import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export function SignIn() {
  const [formData, setFormData] = useState({
    studentId: "",
    password: "",
  });

  function handleChanges(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handlesubmit() {
    console.log(formData);
    alert("ok");
  }

  //   async function login(username, password) {
  //     const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ username, password }),
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //         localStorage.setItem("accessToken", data.access);
  //         localStorage.setItem("refreshToken", data.refresh);
  //         return true;
  //     } else {
  //         return false;
  //     }
  // }
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4" style={{ color: "#0d0a2c" }}>
          Sign In
        </h2>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label className="form-label">Student Number</label>
            <input type="text" className="form-control" name="studentId" value={formData.studentId} onChange={handleChanges} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChanges} required />
          </div>
          <button type="submit" className="btn  w-100" style={{ backgroundColor: "#0d0a2c", color: "white" }}>
            Sign In
          </button>
          <a href="#" className="link m-3">
            forgot passwordss
          </a>
          <a href="/signUp" className="link m-3">
            Register
          </a>
        </form>
      </div>
    </div>
  );
}
