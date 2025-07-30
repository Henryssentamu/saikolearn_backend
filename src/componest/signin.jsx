import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { apiUrl } from "../../env";

export function SignIn() {
  const navigate = useNavigate();

  async function login(username, password) {
    const dataSend = { student_id:username, password:password}
    try {
      const response = await fetch(`${apiUrl}authenticate/token/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataSend),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data)
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.darefresh);
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("user_type", data.user_type);
        if (user_type === "student") {
          navigate("/studentportal");
        } else {
          // window.location.href = `/employee/${user_id}`;
          console.log("i will handle employees here")
          console.log("feid")
        }
  
      } else {
        alert("Error while sending your details, please try again.");
        navigate("/signin");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong. Please try again later.");
    }
  }

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChanges(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handlesubmit(e) {
    e.preventDefault(); // Prevents page reload
    await login(formData.username, formData.password);
    // navigate("/studentportal")
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4" style={{ color: "#0d0a2c" }}>
          Sign In
        </h2>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label className="form-label">Student Number</label>
            <input type="text" className="form-control" name="username" value={formData.username} onChange={handleChanges} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChanges} required />
          </div>
          <button type="submit" className="btn w-100" style={{ backgroundColor: "#0d0a2c", color: "white" }}>
            Sign In
          </button>
          <div className="row mt-3">
            {/* <div className="col">
              <a href="#" className="link m-3">
                Forgot password?
              </a>
            </div> */}

            <div className="col">
              Don't have account?
              <a href="/signUp" className="link m-3">
                Register
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
