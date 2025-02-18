import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export function SignIn() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4" style={{ color: "#0d0a2c" }}>
          Sign In
        </h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Student Number</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required />
          </div>
          <button type="submit" className="btn  w-100" style={{ backgroundColor: "#0d0a2c", color: "white" }}>
            Sign In
          </button>
          <a href="#" className="link m-3">
            forgot password
          </a>
          <a href="/signUp" className="link m-3">
            Register
          </a>
        </form>
      </div>
    </div>
  );
}
