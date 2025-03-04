import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaPlus, FaCog } from "react-icons/fa";

export function AdminCourseDashboard() {
  const adminName = "John Doe"; // Replace with actual admin data

  // Sample Course Data (Replace with API data if needed)
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "React Basics",
      duration: "6 Weeks",
      instructor: "Jane Smith",
      youtube: "https://youtu.be/dGcsHMXbSOA",
      thumbnail: "https://via.placeholder.com/150",
      students: 150,
    },
    {
      id: 2,
      name: "Python for Beginners",
      duration: "8 Weeks",
      instructor: "John Doe",
      youtube: "https://youtu.be/rfscVS0vtbw",
      thumbnail: "https://via.placeholder.com/150",
      students: 200,
    },
  ]);

  // State for handling the add course form
  const [newCourse, setNewCourse] = useState({
    name: "",
    duration: "",
    instructor: "",
    youtube: "",
    thumbnail: "",
    students: 0,
  });

  // Handle input change
  const handleInputChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  // Add Course
  const addCourse = () => {
    if (!newCourse.name || !newCourse.instructor || !newCourse.duration) {
      alert("Please fill in all required fields!");
      return;
    }

    setCourses([...courses, { ...newCourse, id: courses.length + 1 }]);
    setNewCourse({ name: "", duration: "", instructor: "", youtube: "", thumbnail: "", students: 0 });
  };

  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Admin Panel
          </a>
          <div className="ml-auto">
            <a className="nav-link" href="#">
              {adminName}
            </a>
            <a className="nav-link text-white" href="/admindashboard">
              back
            </a>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2 bg-light p-3 min-vh-100">
            <nav className="nav flex-column">
              <a className="nav-link text-primary" href="#add-course">
                <FaPlus className="me-2" /> Add Course
              </a>
            </nav>
          </div>

          {/* Main Content */}
          <div className="col-md-10 p-4">
            {/* <h3 className="mb-4">Available Courses</h3> */}

            {/* Course List */}
            {/* <div className="row">
              {courses.map((course) => (
                <div key={course.id} className="col-md-4 mb-4">
                  <div className="card shadow-sm h-100">
                    <img src={course.thumbnail} className="card-img-top" alt={course.name} />
                    <div className="card-body">
                      <h5 className="card-title text-primary">{course.name}</h5>
                      <p className="card-text">
                        <strong>Instructor:</strong> {course.instructor}
                      </p>
                      <p className="card-text">
                        <strong>Duration:</strong> {course.duration}
                      </p>
                      <p className="card-text">
                        <strong>Students:</strong> {course.students}
                      </p>
                      <a href={course.youtube} target="_blank" className="btn btn-sm btn-danger">
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            {/* Add Course Form */}
            <div id="add-course" className="mt-5">
              <h3 className="mb-3">Add a New Course</h3>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Course Name"
                    className="form-control mb-2"
                    onChange={handleInputChange}
                    value={newCourse.name}
                  />
                  <input
                    type="text"
                    name="duration"
                    placeholder="Duration"
                    className="form-control mb-2"
                    onChange={handleInputChange}
                    value={newCourse.duration}
                  />
                  <input
                    type="text"
                    name="instructor"
                    placeholder="Instructor Name"
                    className="form-control mb-2"
                    onChange={handleInputChange}
                    value={newCourse.instructor}
                  />
                  <input
                    type="file"
                    name="thumbnail"
                    placeholder="Thumbnail Image URL"
                    className="form-control mb-2"
                    onChange={handleInputChange}
                    value={newCourse.thumbnail}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    name="coursebrief"
                    placeholder="brief About The Course "
                    className="form-control mb-2"
                    onChange={handleInputChange}
                    value={newCourse.name}
                  />
                  <input
                    type="text"
                    name="duration"
                    placeholder="School To which the course it brings"
                    className="form-control mb-2"
                    onChange={handleInputChange}
                    value={newCourse.duration}
                  />
                  <input
                    type="url"
                    name="youtube"
                    placeholder="YouTube Link"
                    className="form-control mb-2"
                    onChange={handleInputChange}
                    value={newCourse.youtube}
                  />

                  <button className="btn btn-primary w-100" onClick={addCourse}>
                    Add Course
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
