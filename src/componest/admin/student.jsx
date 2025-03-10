// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

// export function StudentApplications() {
//   const [applications, setApplications] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       age: 22,
//       sex: "Male",
//       country: "USA",
//       email: "johndoe@example.com",
//       contact: "+1234567890",
//       course: "Computer Science",
//       documents: "Transcript.pdf",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       age: 21,
//       sex: "Female",
//       country: "Canada",
//       email: "janesmith@example.com",
//       contact: "+1987654321",
//       course: "Business Administration",
//       documents: "Resume.pdf",
//     },
//   ]);

//   const [registeredStudents, setRegisteredStudents] = useState([]);

//   const handleApprove = (id) => {
//     const approvedStudent = applications.find((app) => app.id === id);
//     setRegisteredStudents([...registeredStudents, approvedStudent]);
//     setApplications(applications.filter((app) => app.id !== id));
//   };

//   const handleDeny = (id) => {
//     setApplications(applications.filter((app) => app.id !== id));
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-3">Student Applications</h2>
//       <table className="table table-bordered table-striped">
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Sex</th>
//             <th>Country</th>
//             <th>Email</th>
//             <th>Contact</th>
//             <th>Course Applied</th>
//             <th>Documents</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {applications.map((app) => (
//             <tr key={app.id}>
//               <td>{app.name}</td>
//               <td>{app.age}</td>
//               <td>{app.sex}</td>
//               <td>{app.country}</td>
//               <td>{app.email}</td>
//               <td>{app.contact}</td>
//               <td>{app.course}</td>
//               <td>
//                 <a href="#" className="btn btn-link">
//                   {app.documents}
//                 </a>
//               </td>
//               <td>
//                 <button className="btn btn-success me-2" onClick={() => handleApprove(app.id)}>
//                   Approve
//                 </button>
//                 <button className="btn btn-danger" onClick={() => handleDeny(app.id)}>
//                   Deny
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2 className="mt-4">Registered Students</h2>
//       <table className="table table-bordered table-striped">
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Sex</th>
//             <th>Country</th>
//             <th>Email</th>
//             <th>Contact</th>
//             <th>Course Registered</th>
//           </tr>
//         </thead>
//         <tbody>
//           {registeredStudents.map((student) => (
//             <tr key={student.id}>
//               <td>{student.name}</td>
//               <td>{student.age}</td>
//               <td>{student.sex}</td>
//               <td>{student.country}</td>
//               <td>{student.email}</td>
//               <td>{student.contact}</td>
//               <td>{student.course}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function StudentApplications() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 20,
      sex: "Male",
      country: "USA",
      email: "john@example.com",
      contact: "1234567890",
      course: "Computer Science",
      documents: "Uploaded",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 22,
      sex: "Female",
      country: "UK",
      email: "jane@example.com",
      contact: "9876543210",
      course: "Business Administration",
      documents: "Uploaded",
    },
  ]);

  const [registeredStudents, setRegisteredStudents] = useState([]);

  const handleApprove = (id) => {
    const approvedStudent = applications.find((app) => app.id === id);
    setRegisteredStudents([...registeredStudents, approvedStudent]);
    setApplications(applications.filter((app) => app.id !== id));
  };

  const handleDeny = (id) => {
    setApplications(applications.filter((app) => app.id !== id));
  };

  const handleRegisterAll = () => {
    setRegisteredStudents([...registeredStudents, ...applications]);
    setApplications([]);
  };

  return (
    <div className="container mt-4">
      <h3>Student Applications</h3>
      <div className="table-responsive" style={{ maxHeight: "200px", overflowY: "auto" }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Country</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Course</th>
              <th>Documents</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.name}</td>
                <td>{app.age}</td>
                <td>{app.sex}</td>
                <td>{app.country}</td>
                <td>{app.email}</td>
                <td>{app.contact}</td>
                <td>{app.course}</td>
                <td>{app.documents}</td>
                <td>
                  <button className="btn btn-success btn-sm me-2" onClick={() => handleApprove(app.id)}>
                    Approve
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDeny(app.id)}>
                    Deny
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mt-4">Registered Students</h3>
      <button
        className="btn btn-primary mb-2"
        onClick={handleRegisterAll}
        disabled={!registeredStudents || registeredStudents.length === 0}
      >
        Register All
      </button>
      <div className="table-responsive" style={{ maxHeight: "200px", overflowY: "auto" }}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Country</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Course</th>
              <th>Documents</th>
            </tr>
          </thead>
          <tbody>
            {registeredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.sex}</td>
                <td>{student.country}</td>
                <td>{student.email}</td>
                <td>{student.contact}</td>
                <td>{student.course}</td>
                <td>{student.documents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
