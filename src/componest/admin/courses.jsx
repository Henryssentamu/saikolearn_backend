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

export function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});
  const [editMode, setEditMode] = useState(false);

  const handleShowModal = (student = null) => {
    setEditMode(!!student);
    setCurrentStudent(student || { name: "", course: "", progress: 0, status: "Active", payment: "Paid" });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveStudent = () => {
    if (editMode) {
      setStudents(students.map((stud) => (stud.name === currentStudent.name ? currentStudent : stud)));
    } else {
      setStudents([...students, currentStudent]);
    }
    handleCloseModal();
  };

  const handleDeleteStudent = (name) => {
    setStudents(students.filter((stud) => stud.name !== name));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Student Enrollment & Management</h2>
      <button className="btn btn-primary" onClick={() => handleShowModal()}>
        <FaPlus /> Add Student
      </button>
      <button className="btn btn-secondary ms-2">
        <FaUpload /> Bulk Upload CSV
      </button>
      <table className="table table-striped table-bordered table-hover mt-3">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Enrolled Course</th>
            <th>Progress (%)</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stud, index) => (
            <tr key={index}>
              <td>{stud.name}</td>
              <td>{stud.course}</td>
              <td>{stud.progress}%</td>
              <td>{stud.status}</td>
              <td>{stud.payment}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => handleShowModal(stud)}>
                  <FaEdit />
                </button>
                <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDeleteStudent(stud.name)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal show" style={{ display: "block" }} tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editMode ? "Edit Student" : "Add Student"}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="studentName" className="form-label">
                      Student Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="studentName"
                      value={currentStudent.name}
                      onChange={(e) => setCurrentStudent({ ...currentStudent, name: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="enrolledCourse" className="form-label">
                      Enrolled Course
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="enrolledCourse"
                      value={currentStudent.course}
                      onChange={(e) => setCurrentStudent({ ...currentStudent, course: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="progress" className="form-label">
                      Progress (%)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="progress"
                      min="0"
                      max="100"
                      value={currentStudent.progress}
                      onChange={(e) => setCurrentStudent({ ...currentStudent, progress: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label">
                      Status
                    </label>
                    <select
                      className="form-select"
                      id="status"
                      value={currentStudent.status}
                      onChange={(e) => setCurrentStudent({ ...currentStudent, status: e.target.value })}
                    >
                      <option value="Active">Active</option>
                      <option value="Completed">Completed</option>
                      <option value="Dropped">Dropped</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="paymentStatus" className="form-label">
                      Payment Status
                    </label>
                    <select
                      className="form-select"
                      id="paymentStatus"
                      value={currentStudent.payment}
                      onChange={(e) => setCurrentStudent({ ...currentStudent, payment: e.target.value })}
                    >
                      <option value="Paid">Paid</option>
                      <option value="Pending">Pending</option>
                      <option value="Overdue">Overdue</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSaveStudent}>
                  {editMode ? "Update Student" : "Add Student"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function InstructorManagement() {
  const [instructors, setInstructors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentInstructor, setCurrentInstructor] = useState({});
  const [editMode, setEditMode] = useState(false);

  const handleShowModal = (instructor = null) => {
    setEditMode(!!instructor);
    setCurrentInstructor(instructor || { name: "", course: "", role: "", rating: 0, feedback: "" });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveInstructor = () => {
    if (editMode) {
      setInstructors(instructors.map((inst) => (inst.name === currentInstructor.name ? currentInstructor : inst)));
    } else {
      setInstructors([...instructors, currentInstructor]);
    }
    handleCloseModal();
  };

  const handleDeleteInstructor = (name) => {
    setInstructors(instructors.filter((inst) => inst.name !== name));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Instructor Management</h2>
      <button className="btn btn-primary" onClick={() => handleShowModal()}>
        <FaPlus /> Add Instructor
      </button>
      <table className="table table-striped table-bordered table-hover mt-3">
        <thead>
          <tr>
            <th>Instructor Name</th>
            <th>Assigned Course</th>
            <th>Role</th>
            <th>Rating</th>
            <th>Feedback</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((inst, index) => (
            <tr key={index}>
              <td>{inst.name}</td>
              <td>{inst.course}</td>
              <td>{inst.role}</td>
              <td>{inst.rating} / 5</td>
              <td>{inst.feedback}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => handleShowModal(inst)}>
                  <FaEdit />
                </button>
                <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDeleteInstructor(inst.name)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal show" style={{ display: "block" }} tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editMode ? "Edit Instructor" : "Add Instructor"}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="instructorName" className="form-label">
                      Instructor Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="instructorName"
                      value={currentInstructor.name}
                      onChange={(e) => setCurrentInstructor({ ...currentInstructor, name: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="assignedCourse" className="form-label">
                      Assigned Course
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="assignedCourse"
                      value={currentInstructor.course}
                      onChange={(e) => setCurrentInstructor({ ...currentInstructor, course: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="role" className="form-label">
                      Role
                    </label>
                    <select
                      className="form-select"
                      id="role"
                      value={currentInstructor.role}
                      onChange={(e) => setCurrentInstructor({ ...currentInstructor, role: e.target.value })}
                    >
                      <option value="Full Control">Full Control</option>
                      <option value="Content Editor">Content Editor</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rating" className="form-label">
                      Rating
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="rating"
                      min="1"
                      max="5"
                      value={currentInstructor.rating}
                      onChange={(e) => setCurrentInstructor({ ...currentInstructor, rating: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="feedback" className="form-label">
                      Feedback
                    </label>
                    <textarea
                      className="form-control"
                      id="feedback"
                      rows="3"
                      value={currentInstructor.feedback}
                      onChange={(e) => setCurrentInstructor({ ...currentInstructor, feedback: e.target.value })}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSaveInstructor}>
                  {editMode ? "Update Instructor" : "Add Instructor"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function ContentManagement() {
  const [contents, setContents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentContent, setCurrentContent] = useState({});
  const [editMode, setEditMode] = useState(false);

  const handleShowModal = (content = null) => {
    setEditMode(!!content);
    setCurrentContent(content || { title: "", type: "Video", schedule: "Immediate", version: 1 });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveContent = () => {
    if (editMode) {
      setContents(contents.map((item) => (item.title === currentContent.title ? currentContent : item)));
    } else {
      setContents([...contents, currentContent]);
    }
    handleCloseModal();
  };

  const handleDeleteContent = (title) => {
    setContents(contents.filter((item) => item.title !== title));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Content Management</h2>
      <button className="btn btn-primary" onClick={() => handleShowModal()}>
        <FaPlus /> Upload Content
      </button>
      <table className="table table-striped table-bordered table-hover mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Release Schedule</th>
            <th>Version</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td>{item.schedule}</td>
              <td>{item.version}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => handleShowModal(item)}>
                  <FaEdit />
                </button>
                <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDeleteContent(item.title)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for content upload/edit */}
      {showModal && (
        <div className="modal show" style={{ display: "block" }} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editMode ? "Edit Content" : "Upload Content"}</h5>
                <button type="button" className="close" data-dismiss="modal" onClick={handleCloseModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="content-title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="content-title"
                      value={currentContent.title}
                      onChange={(e) => setCurrentContent({ ...currentContent, title: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="content-type" className="form-label">
                      Type
                    </label>
                    <select
                      className="form-select"
                      id="content-type"
                      value={currentContent.type}
                      onChange={(e) => setCurrentContent({ ...currentContent, type: e.target.value })}
                    >
                      <option value="Video">Video</option>
                      <option value="PDF">PDF</option>
                      <option value="Quiz">Quiz</option>
                      <option value="Assignment">Assignment</option>
                      <option value="Live Class">Live Class</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="content-schedule" className="form-label">
                      Release Schedule
                    </label>
                    <select
                      className="form-select"
                      id="content-schedule"
                      value={currentContent.schedule}
                      onChange={(e) => setCurrentContent({ ...currentContent, schedule: e.target.value })}
                    >
                      <option value="Immediate">Immediate</option>
                      <option value="Drip">Drip Content</option>
                      <option value="Scheduled">Scheduled</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="content-version" className="form-label">
                      Version
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="content-version"
                      min="1"
                      value={currentContent.version}
                      onChange={(e) => setCurrentContent({ ...currentContent, version: e.target.value })}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSaveContent}>
                  {editMode ? "Update Content" : "Upload Content"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function AssessmentsGrading() {
  const [assessments, setAssessments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentAssessment, setCurrentAssessment] = useState({});
  const [editMode, setEditMode] = useState(false);

  const handleShowModal = (assessment = null) => {
    setEditMode(!!assessment);
    setCurrentAssessment(assessment || { title: "", type: "Quiz", grading: "Auto", rubric: "" });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveAssessment = () => {
    if (editMode) {
      setAssessments(assessments.map((item) => (item.title === currentAssessment.title ? currentAssessment : item)));
    } else {
      setAssessments([...assessments, currentAssessment]);
    }
    handleCloseModal();
  };

  const handleDeleteAssessment = (title) => {
    setAssessments(assessments.filter((item) => item.title !== title));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Assessments & Grading</h2>
      <button className="btn btn-primary" onClick={() => handleShowModal()}>
        <FaPlus /> Create Assessment
      </button>
      <table className="table table-striped table-bordered table-hover responsive mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Grading</th>
            <th>Rubric</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assessments.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td>{item.grading}</td>
              <td>{item.rubric || "N/A"}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => handleShowModal(item)}>
                  <FaEdit />
                </button>
                <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDeleteAssessment(item.title)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editMode ? "Edit Assessment" : "Create Assessment"}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={currentAssessment.title}
                    onChange={(e) => setCurrentAssessment({ ...currentAssessment, title: e.target.value })}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Type</label>
                  <select
                    className="form-select"
                    value={currentAssessment.type}
                    onChange={(e) => setCurrentAssessment({ ...currentAssessment, type: e.target.value })}
                  >
                    <option value="Quiz">Quiz</option>
                    <option value="Assignment">Assignment</option>
                    <option value="Test">Test</option>
                    <option value="Peer Review">Peer Review</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Grading</label>
                  <select
                    className="form-select"
                    value={currentAssessment.grading}
                    onChange={(e) => setCurrentAssessment({ ...currentAssessment, grading: e.target.value })}
                  >
                    <option value="Auto">Automatic</option>
                    <option value="Manual">Manual</option>
                    <option value="Peer Review">Peer Review</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Rubric (Optional)</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={currentAssessment.rubric}
                    onChange={(e) => setCurrentAssessment({ ...currentAssessment, rubric: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleSaveAssessment}>
                  {editMode ? "Update Assessment" : "Create Assessment"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function CommunicationEngagement() {
  const [discussions, setDiscussions] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [inputText, setInputText] = useState("");

  const handleShowModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setInputText("");
  };

  const handleSave = () => {
    if (modalType === "announcement") {
      setAnnouncements([...announcements, inputText]);
    } else if (modalType === "discussion") {
      setDiscussions([...discussions, inputText]);
    }
    handleCloseModal();
  };

  return (
    <div className="container mt-4">
      <h2>Communication & Engagement</h2>
      <div className="d-flex gap-3 mb-3">
        <button className="btn btn-primary" onClick={() => handleShowModal("announcement")}>
          <FaBullhorn /> Post Announcement
        </button>
        <button className="btn btn-secondary" onClick={() => handleShowModal("discussion")}>
          <FaComments /> Start Discussion
        </button>
      </div>

      <div className="card mb-3">
        <div className="card-header">
          <FaEnvelope /> Announcements
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {announcements.length > 0 ? (
              announcements.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))
            ) : (
              <li className="list-group-item">No announcements yet.</li>
            )}
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <FaUsers /> Discussion Forums
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {discussions.length > 0 ? (
              discussions.map((item, index) => (
                <li key={index} className="list-group-item">
                  {item}
                </li>
              ))
            ) : (
              <li className="list-group-item">No discussions yet.</li>
            )}
          </ul>
        </div>
      </div>

      {showModal && (
        <div className="modal show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalType === "announcement" ? "New Announcement" : "New Discussion"}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">{modalType === "announcement" ? "Announcement Text" : "Discussion Topic"}</label>
                  <textarea className="form-control" rows="3" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleSave}>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function ReportsAnalytics() {
  const coursePerformance = [
    { course: "React Basics", completion: "85%", dropout: "15%", engagement: "High" },
    { course: "Python for Data Science", completion: "78%", dropout: "22%", engagement: "Medium" },
  ];

  const studentProgress = [
    { student: "John Doe", course: "React Basics", progress: "95%" },
    { student: "Jane Smith", course: "Python for Data Science", progress: "80%" },
  ];

  const revenueReports = [
    { month: "January", revenue: "$5000", subscriptions: "200", discounts: "$300" },
    { month: "February", revenue: "$6200", subscriptions: "240", discounts: "$400" },
  ];

  const feedback = [
    { course: "React Basics", rating: "4.5", reviews: "120" },
    { course: "Python for Data Science", rating: "4.2", reviews: "95" },
  ];

  return (
    <div className="container mt-4">
      <h2>Reports & Analytics</h2>

      <div className="card mb-3">
        <div className="card-header">
          <FaChartLine /> Course Performance Analytics
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Course</th>
                <th>Completion Rate</th>
                <th>Dropout Rate</th>
                <th>Engagement Level</th>
              </tr>
            </thead>
            <tbody>
              {coursePerformance.map((data, index) => (
                <tr key={index}>
                  <td>{data.course}</td>
                  <td>{data.completion}</td>
                  <td>{data.dropout}</td>
                  <td>{data.engagement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">
          <FaUsers /> Student Progress Reports
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {studentProgress.map((data, index) => (
                <tr key={index}>
                  <td>{data.student}</td>
                  <td>{data.course}</td>
                  <td>{data.progress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">
          <FaMoneyBillWave /> Revenue & Sales Reports
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Month</th>
                <th>Revenue</th>
                <th>Subscriptions</th>
                <th>Discounts</th>
              </tr>
            </thead>
            <tbody>
              {revenueReports.map((data, index) => (
                <tr key={index}>
                  <td>{data.month}</td>
                  <td>{data.revenue}</td>
                  <td>{data.subscriptions}</td>
                  <td>{data.discounts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <FaStar /> Feedback & Reviews
        </div>
        <div className="card-body">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Course</th>
                <th>Rating</th>
                <th>Reviews</th>
              </tr>
            </thead>
            <tbody>
              {feedback.map((data, index) => (
                <tr key={index}>
                  <td>{data.course}</td>
                  <td>{data.rating}</td>
                  <td>{data.reviews}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function CourseAdminDashboard() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark mb-3 p-3">
        <a className="navbar-brand" href="#">
          Course Admin Dashboard
        </a>
        <a href="/schooldash" className="btn btn-light">
          Go Back
        </a>
      </nav>
      <div className="container mt-4">
        <ul className="nav nav-tabs mb-3" id="admin-dashboard-tabs">
          {/* <li className="nav-item">
            <a className="nav-link active" id="courses-tab" data-bs-toggle="tab" href="#courses">
              Course Management
            </a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link" id="instructors-tab" data-bs-toggle="tab" href="#instructors">
              Instructor Management
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="students-tab" data-bs-toggle="tab" href="#students">
              Student Management
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="content-tab" data-bs-toggle="tab" href="#content">
              Content Management
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="assessments-tab" data-bs-toggle="tab" href="#assessments">
              Assessments & Grading
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="communication-tab" data-bs-toggle="tab" href="#communication">
              Communication & Engagement
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="reports-tab" data-bs-toggle="tab" href="#reports">
              Reports & Analytics
            </a>
          </li>
        </ul>
        <div className="tab-content" id="admin-dashboard-tab-content">
          {/* <div className="tab-pane fade show active" id="courses">
            <CourseManagement />
          </div> */}
          <div className="tab-pane fade" id="instructors">
            <InstructorManagement />
          </div>
          <div className="tab-pane fade" id="students">
            <StudentManagement />
          </div>
          <div className="tab-pane fade" id="content">
            <ContentManagement />
          </div>
          <div className="tab-pane fade" id="assessments">
            <AssessmentsGrading />
          </div>
          <div className="tab-pane fade" id="communication">
            <CommunicationEngagement />
          </div>
          <div className="tab-pane fade" id="reports">
            <ReportsAnalytics />
          </div>
        </div>
      </div>
    </>
  );
}
