import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Footer } from "../subcomponets/footers/home";
import { HomeNav } from "../subcomponets/headers/homepage";
import { apiUrl } from "../../env";
import { countriesList, countryCodesList } from "../assets/countrycodes";

export async function Api({ data, root }) {
  try {
    const response = await fetch(`${root}registerstudent/`, {
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
  const [showModal, setShowModal] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [formData, setFormData] = useState({
    FirstName: "",
    SecondName: "",
    PhoneNumber: "",
    countryCode: "+256",
    Email: "",
    Country: "",
    DateOfBirth: "",
    Gender: "",
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

    const fullPhone = formData.countryCode + formData.PhoneNumber;
    const { confirmPassword, countryCode, ...dataToSend } = formData;
    dataToSend.PhoneNumber = fullPhone;

    try {
      // console.log(dataToSend);
      const responseData = await Api({ data: dataToSend, root: apiUrl });
      if (responseData) {
        // console.log(responseData);
        // console.log(responseData.StudentId);
        // alert(responseData.StudentId);
        setStudentId(responseData.StudentId);
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
        <div className="card p-4 shadow">
          <h2 className="mb-4 text-center">Student Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Given Name</label>
              <input type="text" name="FirstName" className="form-control" value={formData.FirstName} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Sur Name</label>
              <input type="text" name="SecondName" className="form-control" value={formData.SecondName} onChange={handleChange} required />
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
                  name="PhoneNumber"
                  className="form-control"
                  value={formData.PhoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" name="Email" className="form-control" value={formData.Email} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label">Country of Origin</label>
              <select name="Country" className="form-select" value={formData.Country} onChange={handleChange} required>
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
                name="DateOfBirth"
                className="form-control"
                value={formData.DateOfBirth}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select name="Gender" className="form-select" value={formData.Gender} onChange={handleChange} required>
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
              <p>Please keep your student ID, as you will need it to log in to your student portal.</p>
              <p>
                Your Student ID: <strong>{studentId}</strong>
              </p>
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
