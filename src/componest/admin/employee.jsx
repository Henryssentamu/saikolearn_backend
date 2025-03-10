// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export function EmployeeManagement() {
//   // States for employee data and recruitment form
//   const [employees, setEmployees] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       phone: "123-456-7890",
//       email: "john.doe@example.com",
//       category: "Teaching Staff",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       phone: "987-654-3210",
//       email: "jane.smith@example.com",
//       category: "Non-Teaching Staff",
//     },
//   ]);

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     category: "Teaching Staff",
//     salary: "Volunteer",
//     profilePic: null,
//     resume: null,
//   });

//   const handleTerminate = (id) => {
//     setEmployees(employees.filter((emp) => emp.id !== id));
//   };

//   const handleSuspend = (id) => {
//     alert(`Employee ${id} suspended.`);
//   };

//   const handleReEmploy = (id) => {
//     alert(`Employee ${id} re-employed.`);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setEmployees([...employees, { id: employees.length + 1, ...formData }]);
//     setFormData({
//       name: "",
//       phone: "",
//       email: "",
//       category: "Teaching Staff",
//       salary: "Volunteer",
//       profilePic: null,
//       resume: null,
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files[0],
//     }));
//   };

//   return (
//     <div className="container my-5">
//       <h2>Employee Management</h2>

//       {/* Employee Table */}
//       <table className="table table-bordered mt-4">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Phone Number</th>
//             <th>Email</th>
//             <th>Category</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => (
//             <tr key={employee.id}>
//               <td>{employee.name}</td>
//               <td>{employee.phone}</td>
//               <td>{employee.email}</td>
//               <td>{employee.category}</td>
//               <td>
//                 <button className="btn btn-danger mx-1" onClick={() => handleTerminate(employee.id)}>
//                   Terminate Contract
//                 </button>
//                 <button className="btn btn-warning mx-1" onClick={() => handleSuspend(employee.id)}>
//                   Suspend
//                 </button>
//                 <button className="btn btn-success mx-1" onClick={() => handleReEmploy(employee.id)}>
//                   Re-employ
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Recruitment Form */}
//       <h3 className="mt-5">Recruit Employee</h3>
//       <form onSubmit={handleFormSubmit}>
//         <div className="mb-3">
//           <h5>Bio Data Section</h5>
//           <label htmlFor="name" className="form-label">
//             Name
//           </label>
//           <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
//           <label htmlFor="phone" className="form-label mt-2">
//             Phone Number
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             required
//           />
//           <label htmlFor="email" className="form-label mt-2">
//             Email
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <h5>Salary Section</h5>
//           <label htmlFor="salary" className="form-label">
//             Salary
//           </label>
//           <select id="salary" name="salary" className="form-control" value={formData.salary} onChange={handleInputChange}>
//             <option value="Volunteer">Volunteer</option>
//             <option value="Full-Time">Full-Time</option>
//             <option value="Part-Time">Part-Time</option>
//           </select>
//         </div>

//         <div className="mb-3">
//           <h5>Document Section</h5>
//           <label htmlFor="profilePic" className="form-label">
//             Profile Picture
//           </label>
//           <input type="file" className="form-control" id="profilePic" name="profilePic" accept="image/*" onChange={handleFileChange} />
//           <label htmlFor="resume" className="form-label mt-2">
//             Resume (PDF)
//           </label>
//           <input type="file" className="form-control" id="resume" name="resume" accept="application/pdf" onChange={handleFileChange} />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Recruit Employee
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function EmployeeManagement() {
  // States for employee data and recruitment form
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-7890",
      email: "john.doe@example.com",
      category: "Teaching Staff",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "jane.smith@example.com",
      category: "Non-Teaching Staff",
    },
    // Add more employees for scrolling effect
    {
      id: 3,
      name: "Mark Wilson",
      phone: "111-222-3333",
      email: "mark.wilson@example.com",
      category: "Teaching Staff",
    },
    {
      id: 4,
      name: "Lucy Brown",
      phone: "444-555-6666",
      email: "lucy.brown@example.com",
      category: "Non-Teaching Staff",
    },
    {
      id: 5,
      name: "James Lee",
      phone: "777-888-9999",
      email: "james.lee@example.com",
      category: "Teaching Staff",
    },
  ]);

  const handleTerminate = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const handleSuspend = (id) => {
    alert(`Employee ${id} suspended.`);
  };

  const handleReEmploy = (id) => {
    alert(`Employee ${id} re-employed.`);
  };

  return (
    <div>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Admin Panel
          </a>
          <div className="ml-auto d-flex">
            <a className="nav-link" href="/school" style={{ color: "white" }}>
              Back
            </a>
            <a className="nav-link ms-5" href="/recruitemployee" style={{ color: "white" }}>
              Recruite Employee
            </a>
          </div>
        </div>
      </nav>
      {/* body */}
      <div className="container my-5">
        <h2>Employee Management</h2>

        {/* Employee Table */}
        <div style={{ maxHeight: "500px", overflowY: "auto", marginTop: "20px" }}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>{employee.category}</td>
                  <td>
                    <button className="btn btn-danger mx-1" onClick={() => handleTerminate(employee.id)}>
                      Terminate Contract
                    </button>
                    <button className="btn btn-warning mx-1" onClick={() => handleSuspend(employee.id)}>
                      Suspend
                    </button>
                    <button className="btn btn-success mx-1" onClick={() => handleReEmploy(employee.id)}>
                      Re-employ
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
