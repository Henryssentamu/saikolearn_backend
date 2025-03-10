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
  FaPaperPlane,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaDollarSign,
  FaBars,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const schools = [
  {
    SchoolId: "se001",
    SchoolName: "School Of Software Engineering",
  },
  {
    SchoolId: "ds001",
    SchoolName: "School of Data science",
  },
];

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
      setCurrentCourse(course || { name: "", School: "", prerequisites: "", YoutubeCourseLink: "" });
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
    const sendCourseTobackendserver = () => {
      if (courses) {
        // fetch('/api/send-courses', { method: 'POST', body: JSON.stringify(courses) });
        alert(courses);
        console.log(courses);

        // reload the page so that it empty the
        // window.location.reload();
        setCourses([]);
      } else {
        return <div>no course to send </div>;
      }
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
              <th>School</th>
              <th>Prerequisites</th>
              <th>YoutubeCourseLink</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.School}</td>
                <td>{course.prerequisites}</td>
                <td>
                  {course.YoutubeCourseLink.includes("youtube") ? (
                    <a href={course.YoutubeCourseLink} target="_blank" rel="noopener noreferrer">
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
                  <button className="btn btn-success btn-sm ms-2" onClick={() => sendCourseTobackendserver()}>
                    <FaPaperPlane />
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
                        School
                      </label>
                      <select
                        name="School"
                        id="course-category"
                        className="form-control"
                        value={currentCourse.School}
                        onChange={(e) => setCurrentCourse({ ...currentCourse, School: e.target.value })}
                      >
                        <option value="">Select a school</option> {/* Default empty option */}
                        {schools.map((school) => (
                          <option key={school.SchoolId} value={school.SchoolId}>
                            {school.SchoolName}
                          </option>
                        ))}
                      </select>
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
                        Course YouTube Link (YouTube or Zoom/Google Meet Link)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="course-content"
                        value={currentCourse.YoutubeCourseLink}
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
