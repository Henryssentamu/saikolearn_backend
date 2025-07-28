import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Footer } from "../subcomponets/footers/home";
import { HomeNav } from "../subcomponets/headers/homepage";
import { apiUrl } from "../../env";
import { countriesList, countryCodesList } from "../assets/countrycodes";

export async function Api({ data, root }) {
  try {
    const response = await fetch(`${root}students/registerandregisteredstudents/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error while sending data to backend API");
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export function SignUp() {
  const countries = [...new Set(countriesList)];
  const countryCodes = [...new Set(countryCodesList)];
  const [cssloader, setcssloader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [student_id, setStudentId] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    second_name: "",
    phone_number: "",
    countryCode: "+256",
    email: "",
    country: "",
    date_of_birth: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const fullPhone = formData.countryCode + formData.phone_number;
    const { confirmPassword, countryCode, ...dataToSend } = formData;
    dataToSend.phone_number = fullPhone;

    try {
      console.log(dataToSend);
      setcssloader(true)
      const responseData = await Api({ data: dataToSend, root: apiUrl });
      if (responseData) {
        setStudentId(responseData.student_id);
        setcssloader(false)
        setShowModal(true);
      }
    } catch (error) {
      console.error("Registration failed!", error);
    }
  };

  // Function to refresh page when modal is closed
  const handleModalClose = () => {
    setShowModal(false);
    window.location.reload(); // Refresh the page
  };

  return (
    <div>
      <HomeNav />
      <div className="container" style={{ marginTop: "128px" }}>
        {/* css loader */}
        {cssloader && (<div className="d-flex justify-content-center my-3">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>)}
        <div className="card p-4 shadow">
          <h2 className="mb-4 text-center">Student Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input type="text" name="first_name" className="form-control" value={formData.first_name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Sur Name</label>
              <input type="text" name="second_name" className="form-control" value={formData.second_name} onChange={handleChange} required />
            </div>

            <div className="mb-3 row">
              <div className="col-md-3">
                <label className="form-label">Country Code</label>
                <select name="countryCode" className="form-select" value={formData.countryCode} onChange={handleChange}>
                  {countryCodes.map((code) => (
                    <option key={code} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-9">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  name="phone_number"
                  className="form-control"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Country of Origin</label>
              <select name="country" className="form-select" value={formData.country} onChange={handleChange} required>
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                name="date_of_birth"
                className="form-control"
                value={formData.date_of_birth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select name="gender" className="form-select" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <div className={`modal fade ${showModal ? "show d-block" : ""}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Registration Successful!</h5>
              <button type="button" className="btn-close" onClick={handleModalClose}></button>
            </div>
            <div className="modal-body">
              <p>Your student Id has been sent to your email.</p>
              {/* <p>
                Your Student ID: <strong>{student_id}</strong>
              </p> */}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleModalClose}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
