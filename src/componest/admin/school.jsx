import React, { useState } from "react";

import {
  FaEdit,
  FaTrash,
  FaUpload,
  FaPlus,
  FaBullhorn,
  FaComments,
  FaEnvelope,
  FaUsers,
  FaStar,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaUserGraduate, FaChalkboardTeacher, FaBook, FaDollarSign, FaBars } from "react-icons/fa";

// import {
//   FaUserGraduate,
//   FaChalkboardTeacher,
//   FaBook,
//   FaDollarSign,
//   FaChartLine,
//   FaVideo,
//   FaClipboardList,
//   FaFileInvoice,
//   FaFolderOpen,
// } from "react-icons/fa";

// export function DashboardOverview() {
//   return (
//     <div className="container mt-4">
//       <h2 className="mb-3">Dashboard Overview</h2>
//       <div className="row mb-4">
//         <div className="col-md-3">
//           <div className="card text-center shadow-sm p-3">
//             <FaUserGraduate size={40} className="text-primary" />
//             <h5 className="mt-2">Total Students</h5>
//             <h3>1,200</h3>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="card text-center shadow-sm p-3">
//             <FaChalkboardTeacher size={40} className="text-success" />
//             <h5 className="mt-2">Total Teachers</h5>
//             <h3>50</h3>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="card text-center shadow-sm p-3">
//             <FaBook size={40} className="text-warning" />
//             <h5 className="mt-2">Courses</h5>
//             <h3>35</h3>
//           </div>
//         </div>
//         <div className="col-md-3">
//           <div className="card text-center shadow-sm p-3">
//             <FaDollarSign size={40} className="text-danger" />
//             <h5 className="mt-2">Pending Fees</h5>
//             <h3>$5,200</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function StudentManagement() {
//   return (
//     <div className="card p-3 shadow-sm">
//       <h5>Student Management</h5>
//       <table className="table table-striped table-bordered table-hover table-sm">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Course</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>John Doe</td>
//             <td>john@example.com</td>
//             <td>Mathematics</td>
//             <td>
//               <button className="btn btn-primary btn-sm">View</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// Sample Data

//   const [students, setStudents] = useState(initialStudents);
//   const [studentName, setStudentName] = useState("");
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [newCourse, setNewCourse] = useState("");
//   const [newProgress, setNewProgress] = useState(0);
//   const [newGrade, setNewGrade] = useState("");
//   const [newAttendance, setNewAttendance] = useState(0);
//   const [issuedCertificates, setIssuedCertificates] = useState([]);
//   const addStudent = () => {
//     const newStudent = { id: students.length + 1, name: studentName, courses: [] };
//     setStudents([...students, newStudent]);
//     setStudentName("");
//   };
//   const updateCourse = (studentId, courseIndex) => {
//     const updatedStudents = students.map((student) => {
//       if (student.id === studentId) {
//         student.courses[courseIndex] = {
//           ...student.courses[courseIndex],
//           progress: newProgress,
//           grade: newGrade,
//           attendance: newAttendance,
//         };
//       }
//       return student;
//     });
//     setStudents(updatedStudents);
//     setNewCourse("");
//     setNewProgress(0);
//     setNewGrade("");
//     setNewAttendance(0);
//   };
//   const removeStudent = (studentId) => {
//     const updatedStudents = students.filter((student) => student.id !== studentId);
//     setStudents(updatedStudents);
//   };
//   const issueCertificate = (studentId) => {
//     const student = students.find((student) => student.id === studentId);
//     const completedCourses = student.courses.filter((course) => course.completed);
//     if (completedCourses.length === student.courses.length) {
//       setIssuedCertificates([...issuedCertificates, `Certificate issued to ${student.name}`]);
//     } else {
//       alert("All courses need to be completed before issuing a certificate.");
//     }
//   };
//   const trackPerformance = (studentId) => {
//     const student = students.find((student) => student.id === studentId);
//     const totalProgress = student.courses.reduce((acc, course) => acc + course.progress, 0);
//     const averageProgress = totalProgress / student.courses.length;
//     alert(`${student.name}'s average progress: ${averageProgress}%`);
//   };
//   return (
//     <div className="container mt-5">
//       <h1 className="text-center mb-4">Student Management System</h1>
//       {/* Add Student Form */}
//       <div className="card p-4 mb-4 shadow-sm">
//         <h3 className="text-primary">Add New Student</h3>
//         <div className="d-flex">
//           <input
//             type="text"
//             className="form-control mr-2"
//             placeholder="Enter student name"
//             value={studentName}
//             onChange={(e) => setStudentName(e.target.value)}
//           />
//           <button className="btn btn-success" onClick={addStudent}>
//             Add Student
//           </button>
//         </div>
//       </div>
//       {/* Student List */}
//       <div className="row">
//         {students.map((student) => (
//           <div key={student.id} className="col-md-4 mb-4">
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h4 className="card-title">{student.name}</h4>
//                 <button className="btn btn-info btn-sm" onClick={() => setSelectedStudent(student)}>
//                   View Profile
//                 </button>
//                 <button className="btn btn-danger btn-sm ml-2" onClick={() => removeStudent(student.id)}>
//                   Remove
//                 </button>
//                 <button className="btn btn-primary btn-sm ml-2" onClick={() => trackPerformance(student.id)}>
//                   Track Performance
//                 </button>
//                 <button className="btn btn-success btn-sm ml-2" onClick={() => issueCertificate(student.id)}>
//                   Issue Certificate
//                 </button>
//                 {selectedStudent && selectedStudent.id === student.id && (
//                   <div className="mt-3">
//                     <h5 className="text-muted">Student Profile</h5>
//                     {student.courses.map((course, index) => (
//                       <div key={index} className="card p-2 mb-3 shadow-sm">
//                         <h6>{course.name}</h6>
//                         <p>Progress: {course.progress}%</p>
//                         <p>Grade: {course.grade}</p>
//                         <p>Attendance: {course.attendance}%</p>
//                         <button className="btn btn-warning btn-sm" onClick={() => updateCourse(student.id, index)}>
//                           Update Course
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* New Course Form */}
//       {selectedStudent && (
//         <div className="card p-4 mt-5 shadow-sm">
//           <h3 className="text-primary">Add New Course for {selectedStudent.name}</h3>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Course Name"
//               value={newCourse}
//               onChange={(e) => setNewCourse(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="number"
//               className="form-control"
//               placeholder="Progress (%)"
//               value={newProgress}
//               onChange={(e) => setNewProgress(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Grade"
//               value={newGrade}
//               onChange={(e) => setNewGrade(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="number"
//               className="form-control"
//               placeholder="Attendance (%)"
//               value={newAttendance}
//               onChange={(e) => setNewAttendance(e.target.value)}
//             />
//           </div>
//           <button
//             className="btn btn-success"
//             onClick={() => {
//               const updatedStudents = students.map((student) => {
//                 if (student.id === selectedStudent.id) {
//                   student.courses.push({
//                     name: newCourse,
//                     progress: newProgress,
//                     grade: newGrade,
//                     attendance: newAttendance,
//                     completed: false,
//                   });
//                 }
//                 return student;
//               });
//               setStudents(updatedStudents);
//               setNewCourse("");
//               setNewProgress(0);
//               setNewGrade("");
//               setNewAttendance(0);
//             }}
//           >
//             Add Course
//           </button>
//         </div>
//       )}
//       {/* Issued Certificates */}
//       <div className="mt-5">
//         <h3>Issued Certificates</h3>
//         {issuedCertificates.length === 0 ? (
//           <p>No certificates issued yet.</p>
//         ) : (
//           <ul className="list-group">
//             {issuedCertificates.map((certificate, index) => (
//               <li key={index} className="list-group-item">
//                 {certificate}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
//   / Sample student data

const teacherdetails = [
  {
    id: 1,
    name: "John Doe",
    email: "smith@example.com",
    courses: [{ name: "Math 101" }, { name: "English 101" }],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "smith@example.com",
    courses: [{ name: "Math 101" }],
  },
];

export function StudentManagement() {
  const [students, setStudents] = useState([
    {
      id: 1,
      regNo: "STU1001",
      name: "John Doe",
      courses: [
        { name: "Math 101", progress: 80, grade: "B", attendance: 90, completed: false },
        { name: "English 101", progress: 50, grade: "C", attendance: 70, completed: false },
      ],
    },
    {
      id: 2,
      regNo: "STU1002",
      name: "Jane Smith",
      courses: [
        { name: "Math 101", progress: 100, grade: "A", attendance: 95, completed: true },
        { name: "English 101", progress: 90, grade: "B", attendance: 80, completed: true },
      ],
    },
  ]);

  return (
    <div className="container mt-5 ">
      <h2 className="text-center mb-4">Student List</h2>
      <table className="table table-striped table-bordered shadow-sm">
        <thead className="thead-dark">
          <tr>
            <th>Student Name</th>
            <th>Registration Number</th>
            <th>Vist Profile</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.regNo}</td>
              <td>
                <Link to={`/studentprofile?regNo=${student.regNo}`} className="btn btn-primary btn-sm">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TeacherManagement() {
  return (
    <div className="card p-3 shadow-sm">
      <h5>Teacher & Instructor Management</h5>
      <table className="table table-striped table-bordered table-hover table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {teacherdetails.map((teacher) => {
            return (
              <tr>
                <td>{teacher.name}</td>
                <td>{teacher.email}</td>

                <td>
                  <Link to={`/tutorprofile?idNo=${teacher.id}`} className="btn btn-primary btn-sm">
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function CourseManagement() {
  function CourseManagement() {
    const [courses, setCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentCourse, setCurrentCourse] = useState({});
    const [editMode, setEditMode] = useState(false);

    const handleShowModal = (course = null) => {
      setEditMode(!!course);
      setCurrentCourse(course || { name: "", category: "", tags: "", prerequisites: "", content: "" });
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };

    const handleSaveCourse = () => {
      if (editMode) {
        setCourses(courses.map((c) => (c.name === currentCourse.name ? currentCourse : c)));
      } else {
        setCourses([...courses, currentCourse]);
      }
      handleCloseModal();
    };

    const handleDeleteCourse = (name) => {
      setCourses(courses.filter((c) => c.name !== name));
    };

    return (
      <div className="container mt-4">
        <h2 className="mb-4">Course Management</h2>
        <button className="btn btn-primary" onClick={() => handleShowModal()}>
          <FaPlus /> Add Course
        </button>
        <table className="table table-striped table-bordered table-hover mt-3">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Category</th>
              <th>Tags</th>
              <th>Prerequisites</th>
              <th>Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.category}</td>
                <td>{course.tags}</td>
                <td>{course.prerequisites}</td>
                <td>
                  {course.content.includes("youtube") ? (
                    <a href={course.content} target="_blank" rel="noopener noreferrer">
                      YouTube
                    </a>
                  ) : (
                    <a href={course.content} target="_blank" rel="noopener noreferrer">
                      Zoom/Google Meet
                    </a>
                  )}
                </td>
                <td>
                  <button className="btn btn-warning btn-sm" onClick={() => handleShowModal(course)}>
                    <FaEdit />
                  </button>
                  <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDeleteCourse(course.name)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal for course add/edit */}
        {showModal && (
          <div className="modal show" style={{ display: "block" }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{editMode ? "Edit Course" : "Add Course"}</h5>
                  <button type="button" className="close" data-dismiss="modal" onClick={handleCloseModal}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="course-name" className="form-label">
                        Course Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="course-name"
                        value={currentCourse.name}
                        onChange={(e) => setCurrentCourse({ ...currentCourse, name: e.target.value })}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="course-category" className="form-label">
                        Category
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="course-category"
                        value={currentCourse.category}
                        onChange={(e) => setCurrentCourse({ ...currentCourse, category: e.target.value })}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="course-tags" className="form-label">
                        Tags
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="course-tags"
                        value={currentCourse.tags}
                        onChange={(e) => setCurrentCourse({ ...currentCourse, tags: e.target.value })}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="course-prerequisites" className="form-label">
                        Prerequisites
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="course-prerequisites"
                        value={currentCourse.prerequisites}
                        onChange={(e) => setCurrentCourse({ ...currentCourse, prerequisites: e.target.value })}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="course-content" className="form-label">
                        Course Content (YouTube or Zoom/Google Meet Link)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="course-content"
                        value={currentCourse.content}
                        onChange={(e) => setCurrentCourse({ ...currentCourse, content: e.target.value })}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary" onClick={handleSaveCourse}>
                    {editMode ? "Update Course" : "Add Course"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <CourseManagement />
      <div className="card p-3 shadow-sm mt-5">
        <h5>Course & Content Management</h5>
        <table className="table table-striped table-bordered table-hover table-sm">
          <thead>
            <tr>
              <th>Course</th>
              <th>Instructor</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Physics 101</td>
              <td>Dr. Smith</td>
              <td>Active</td>
              <td>
                <Link to={`/courseAdminDashboard`} className="btn btn-primary btn-sm">
                  Manage
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function DashboardOverview() {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const renderComponent = () => {
    switch (activeComponent) {
      case "students":
        return <StudentManagement />;
      case "teachers":
        return <TeacherManagement />;
      case "courses":
        return <CourseManagement />;
      default:
        return (
          <div className="container mt-4">
            <h2 className="mb-3">Dashboard Overview</h2>
            <div className="row mb-4">
              <div className="col-md-3">
                <div className="card text-center shadow-sm p-3">
                  <FaUserGraduate size={40} className="text-primary" />
                  <h5 className="mt-2">Total Students</h5>
                  <h3>1,200</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center shadow-sm p-3">
                  <FaChalkboardTeacher size={40} className="text-success" />
                  <h5 className="mt-2">Total Teachers</h5>
                  <h3>50</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center shadow-sm p-3">
                  <FaBook size={40} className="text-warning" />
                  <h5 className="mt-2">Courses</h5>
                  <h3>35</h3>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center shadow-sm p-3">
                  <FaDollarSign size={40} className="text-danger" />
                  <h5 className="mt-2">Pending Fees</h5>
                  <h3>$5,200</h3>
                </div>
              </div>
            </div>
          </div>
        );
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
            <a className="nav-link" href="/school" style={{ color: "white" }}>
              Back
            </a>
          </div>
        </div>
      </nav>
      {/* body */}
      <div className="d-flex">
        <div className="bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
          <h4 className="text-center">Admin Panel</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <button className="btn btn-link text-white" onClick={() => setActiveComponent("dashboard")}>
                Dashboard
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link text-white" onClick={() => setActiveComponent("students")}>
                Students
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link text-white" onClick={() => setActiveComponent("teachers")}>
                Teachers
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link text-white" onClick={() => setActiveComponent("courses")}>
                Courses
              </button>
            </li>
          </ul>
        </div>
        <div className="flex-grow-1 p-4">{renderComponent()}</div>
      </div>
    </div>
  );
}
