import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { WiSnow } from "react-icons/wi";

// ssession

export function SessionSection() {
  const [modalContent, setModalContent] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleShow = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">Sessions</h5>
        <div className="btn btn-info w-100 mb-2" onClick={() => handleShow("live")}>
          Live Session
        </div>
        <div className="btn btn-info w-100" onClick={() => handleShow("recorded")}>
          Recorded Session
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="sessionModal"
        tabIndex="-1"
        aria-labelledby="sessionModalLabel"
        aria-hidden="true"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="sessionModalLabel">
                Session Details
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">{modalContent === "live" ? "Live session details here" : "Recorded session details here"}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// assesment

export function AssessmentSection() {
  const [modalContent, setModalContent] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleShow = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">Assessments</h5>
        <div className="btn btn-warning w-100 mb-2" onClick={() => handleShow("test")}>
          Test
        </div>
        <div className="btn btn-warning w-100" onClick={() => handleShow("exam")}>
          Exam
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="assessmentModal"
        tabIndex="-1"
        aria-labelledby="assessmentModalLabel"
        aria-hidden="true"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="assessmentModalLabel">
                Assessment Details
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">{modalContent === "test" ? "Test details here" : "Exam details here"}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// project

export function ProjectSection() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">Project</h5>
        <div className="btn btn-success w-100" onClick={handleShow}>
          Project Details
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="projectModal"
        tabIndex="-1"
        aria-labelledby="projectModalLabel"
        aria-hidden="true"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="projectModalLabel">
                Project Details
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">Project details here</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// results

export function ResultSection() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">Result</h5>
        <div className="btn btn-danger w-100" onClick={handleShow}>
          View Results
        </div>
      </div>

      {/* Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        id="resultModal"
        tabIndex="-1"
        aria-labelledby="resultModalLabel"
        aria-hidden="true"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="resultModalLabel">
                Result Details
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">Result details will be displayed here.</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// youtube

export function YouTubeSection() {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 className="card-title">Course Resources</h5>
        <p className="card-text">Watch course videos on YouTube.</p>
        <a
          href="https://www.youtube.com/watch?v=oX7OduG1YmI&t=943s"
          className="btn btn-primary w-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}

export function CourseDashboard() {
  const param = new URLSearchParams(window.location.search);
  const courseid = param.get("courseId");
  //   then send this course id to fetch the course details

  console.log(courseid);
  return (
    <div>
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Content Panel
          </a>
          <div className="ml-auto d-flex">
            <a className="nav-link" href="/studentportal" style={{ color: "white" }}>
              Back
            </a>
          </div>
        </div>
      </nav>
      {/* body */}
      {/* body */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <YouTubeSection />
          </div>
          <div className="col-12 col-md-4 mb-3">
            <SessionSection />
          </div>
          <div className="col-12 col-md-4 mb-3">
            <AssessmentSection />
          </div>
          <div className="col-12 col-md-4 mb-3">
            <ProjectSection />
          </div>
          <div className="col-12 col-md-4 mb-3">
            <ResultSection />
          </div>
        </div>
      </div>
    </div>
  );
}
