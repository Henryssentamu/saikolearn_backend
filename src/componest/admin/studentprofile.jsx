// import { useState } from "react";
// import { useLocation } from "react-router-dom";

// // 🔹 Student Profile Page
// export function StudentProfile() {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const studentRegNo = queryParams.get("regNo");
//   // alert(studentRegNo);
//   // console.log(studentRegNo);
//   const [students, setStudents] = useState([
//     {
//       id: 1,
//       regNo: "STU1001",
//       name: "John Doe",
//       courses: [
//         { name: "Math 101", progress: 80, grade: "B", attendance: 90, completed: false },
//         { name: "English 101", progress: 50, grade: "C", attendance: 70, completed: false },
//       ],
//     },
//     {
//       id: 2,
//       regNo: "STU1002",
//       name: "Jane Smith",
//       courses: [
//         { name: "Math 101", progress: 100, grade: "A", attendance: 95, completed: true },
//         { name: "English 101", progress: 90, grade: "B", attendance: 80, completed: true },
//       ],
//     },
//   ]);

//   const student = students.find((s) => s.regNo === studentRegNo);

//   if (!student) {
//     return <h3 className="text-danger text-center mt-5">Student Not Found</h3>;
//   }

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center text-primary">{student.name}'s Profile</h2>
//       <div className="card shadow-sm p-4 mt-4">
//         <h4>Registration Number: {student.regNo}</h4>
//         <h5>Enrolled Courses:</h5>
//         <table className="table table-bordered table-hover">
//           <thead className="thead-light">
//             <tr>
//               <th>Course Name</th>
//               <th>Progress</th>
//               <th>Grade</th>
//               <th>Attendance</th>
//             </tr>
//           </thead>
//           <tbody>
//             {student.courses.map((course, index) => (
//               <tr key={index}>
//                 <td>{course.name}</td>
//                 <td>{course.progress}%</td>
//                 <td>{course.grade}</td>
//                 <td>{course.attendance}%</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <a href="/" className="btn btn-secondary">
//           Back to Student List
//         </a>
//       </div>
//     </div>
//   );
// }


// b4 last updates

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export function StudentProfile() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const studentRegNo = queryParams.get("regNo");

  const [students, setStudents] = useState([
    {
      id: 1,
      regNo: "STU1001",
      name: "John Doe",
      photo: "https://via.placeholder.com/150",
      bio: "A dedicated student pursuing excellence in Mathematics and English.",
      courses: [
        { name: "Math 101", progress: 80, grade: "B", attendance: 90, completed: false },
        { name: "English 101", progress: 50, grade: "C", attendance: 70, completed: false },
      ],
      certificates: ["Math Excellence Certificate"],
    },
    {
      id: 2,
      regNo: "STU1002",
      name: "Jane Smith",
      photo: "https://via.placeholder.com/150",
      bio: "An enthusiastic learner with a passion for science and literature.",
      courses: [
        { name: "Math 101", progress: 100, grade: "A", attendance: 95, completed: true },
        { name: "English 101", progress: 90, grade: "B", attendance: 80, completed: true },
      ],
      certificates: ["English Proficiency Certificate", "Best Attendance Award"],
    },
  ]);

  const student = students.find((s) => s.regNo === studentRegNo);

  if (!student) {
    return <h3 className="text-danger text-center mt-5">Student Not Found</h3>;
  }

  const removeStudent = () => {
    setStudents(students.filter((s) => s.regNo !== studentRegNo));
    alert("Student removed successfully");
  };

  const suspendStudent = () => {
    alert("Student suspended successfully");
  };

  const [newCertificate, setNewCertificate] = useState("");
  const issueCertificate = () => {
    if (newCertificate.trim()) {
      setStudents(students.map((s) => (s.regNo === studentRegNo ? { ...s, certificates: [...s.certificates, newCertificate] } : s)));
      setNewCertificate("");
    }
  };

  return (
    <div>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Admin Panel
          </a>
          <div className="ml-auto">
            <a className="nav-link" href="/schooldash" style={{ color: "white" }}>
              Back
            </a>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <h2 className="text-center text-primary">{student.name}'s Profile</h2>
        <div className="card shadow-sm p-4 mt-4">
          <div className="row">
            <div className="col-md-4 text-center">
              <img src={student.photo} alt={student.name} className="img-fluid rounded-circle" />
            </div>
            <div className="col-md-8">
              <h4>Registration Number: {student.regNo}</h4>
              <p>
                <strong>Bio:</strong> {student.bio}
              </p>
            </div>
          </div>
          <hr />
          <h5>Enrolled Courses:</h5>
          <table className="table table-bordered table-hover">
            <thead className="thead-light">
              <tr>
                <th>Course Name</th>
                <th>Progress</th>
                <th>Grade</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {student.courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.name}</td>
                  <td>{course.progress}%</td>
                  <td>{course.grade}</td>
                  <td>{course.attendance}%</td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
          <h5>Issued Certificates:</h5>
          <ul>
            {student.certificates.length > 0 ? (
              student.certificates.map((certificate, index) => <li key={index}>{certificate}</li>)
            ) : (
              <p>No certificates issued yet.</p>
            )}
          </ul>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Certificate Name"
              value={newCertificate}
              onChange={(e) => setNewCertificate(e.target.value)}
            />
            <button className="btn btn-primary mt-2" onClick={issueCertificate}>
              Issue Certificate
            </button>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <button className="btn btn-danger" onClick={removeStudent}>
              Remove Student
            </button>
            <button className="btn btn-warning" onClick={suspendStudent}>
              Suspend Student
            </button>
            <a href="/" className="btn btn-secondary">
              Back to Student List
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}




