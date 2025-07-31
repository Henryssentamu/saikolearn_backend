// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { FaUserCircle, FaBook, FaCalendarAlt, FaQuestionCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
// import { Link, useSubmit } from "react-router-dom";
// import { apiUrl } from "../../../env";
// import { fetchWithAuth } from "../../assets/tokenservice";
// import { useLocation, useNavigate } from "react-router-dom";

// // Calendar Component

// const Calendar = ({ events }) => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div className="text-center">
//       {/* Calendar Grid */}
//       <div className="d-flex flex-wrap justify-content-center gap-2">
//         {[...Array(30)].map((_, i) => {
//           const date = `2025-03-${(i + 1).toString().padStart(2, "0")}`;
//           return (
//             <button
//               key={date}
//               className={`btn ${selectedDate === date ? "btn-primary" : "btn-outline-primary"} rounded-circle`}
//               style={{ width: "40px", height: "40px" }}
//               onClick={() => handleDateClick(date)}
//             >
//               {i + 1}
//             </button>
//           );
//         })}
//       </div>

//       {/* Event Display */}
//       <div className="mt-3 p-2 border rounded bg-light">
//         <strong>{selectedDate ? `Event on ${selectedDate}:` : "Select a date to view events"}</strong>
//         <p className="mb-0">{selectedDate ? events[selectedDate] || "No events scheduled" : ""}</p>
//       </div>
//     </div>
//   );
// };

// // Main App Component
// export function Studentportal() {
//   // bellow is how data should be stratured from the api
//   const NavigateWithSchoolId = useNavigate();
//   const location = useLocation();
//   const studentId = location.state?.studentId || localStorage.getItem("studentId");
//   const [studentData, setstudentData] = useState({});
//   const [programs] = useState({
//     softwareEngineering: [{ courseId: "233333", CourseName: "Introduction To Programing" }],
//     dataScience: [{ courseId: "1233", CourseName: "Introduction To Machine Learning" }],
//   });
//   const [schools, setSchools] = useState([]);

//   async function fetchAvailableSchools() {
//     return await fetch(`${apiUrl}schooldetails/`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         // this will be activated when we activate users login token, so we attach it on api call for authentication
//         // Authorization:`Bearer ${token}`
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("school details api call failed");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data) {
//           setSchools(data);
//         }
//         return data;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   async function fetchStudentDetails() {
//     // const stringedStudentId = new URLSearchParams(studentId).toString();

//     return await fetch(`${apiUrl}accademicdetails/?studentId=${studentId}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("api failed to fetch student data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (data) {
//           setstudentData(data);
//           localStorage.setItem("enrolledInCourses", JSON.stringify(data.enrolledCourses));
//           // console.log(data);
//           return true;
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         return false;
//       });
//   }

//   useEffect(() => {
//     // fetchWithAuth(fetchStudentDetails);
//     fetchStudentDetails();
//     fetchAvailableSchools();
//   }, []);

  // // Header Component
  // function Header() {
  //   const [show, setshow] = useState(false);

//     return (
      // <nav className="navbar navbar-expand-lg navbar-light  text-white p-3" style={{ backgroundColor: "#0d0a2c" }}>
      //   <a className="navbar-brand text-white" href="#">
      //     Ssentamu Innovation Hub Of Science And Technology - SIST Student Portal
      //   </a>
      //   <div className="ms-auto d-flex align-items-center">
      //     <div>
      //       <span className="" style={{ marginRight: "10px" }}>
      //         {studentData?.bioData?.SecondName}
      //       </span>
      //       {studentData?.bioData?.profilePic ? (
      //         <img
      //           src={studentData.bioData.profilePic}
      //           className="rounded-circle mt-2"
      //           alt="Student"
      //           style={{ width: "50px", height: "50px" }}
      //           onClick={() => setshow((prev) => !prev)}
      //         />
      //       ) : (
      //         <FaUserCircle size={30} className="cursor-pointer" onClick={() => setshow((prev) => !prev)} />
      //       )}
      //     </div>
      //   </div>
      //   {show && (
      //     <div className="position-absolute bg-white shadow rounded p-3" style={{ right: "10px", top: "50px" }}>
      //       <button className="btn btn-outline-primary w-100 mb-2">
      //         <FaCog /> Settings
      //       </button>
      //       <a href="/" className="btn btn-outline-danger w-100">
      //         <FaSignOutAlt /> Logout
      //       </a>
      //     </div>
      //   )}
      // </nav>
//     );
//   }

//   function Body() {
//     return (
//       <div className="container mt-4">
//         <div className="row g-4">
//           {/* Left Section */}
//           <div className="col-md-3 text-center p-3 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
//             <h5 className="mt-2">Ssentamu Innovation Hub Of Science And Technology - SIST Academy</h5>

//             {/* <img src={student.profilePic} className="rounded-circle mt-2" alt="Student" style={{ width: "150px", height: "150px" }} /> */}
//           </div>

//           {/* Middle Section - Enrolled Programs & Calendar */}
//           <div className="col-md-6">
//             <h5>
//               <FaBook /> Enrolled Programs
//             </h5>
//             <ul className="list-group mb-3">
//               {studentData.enrolledCourses && studentData.enrolledCourses.length > 0 ? (
//                 studentData.enrolledCourses.map((course, index) => {
//                   return (
//                     <div className="list-group-item" key={index}>
//                       <Link to={`/coursedashboard?courseId=${course.courseId}`}>{course.courseName}</Link>
//                     </div>
//                   );
//                 })
//               ) : (
//                 <div>Enroll in Our Programs From 'Other Program ' Section </div>
//               )}
//             </ul>

//             {studentData.events && (
//               <div>
//                 <h5 className="mt-3">
//                   <FaCalendarAlt /> Event Calendar
//                 </h5>
//                 <div className="border rounded p-3" style={{ minHeight: "250px" }}>
//                   <Calendar events={studentData.events} />
//                 </div>{" "}
//               </div>
//             )}
//           </div>

//           {/* Right Section - Other Courses & Help Center */}
//           <div className="col-md-3 p-3 rounded shadow-sm" style={{ backgroundColor: "#f8f9fa" }}>
//             <div className="dropdown">
//               <button
//                 className="btn btn-primary dropdown-toggle"
//                 type="button"
//                 id="programDropdown"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 <FaBook /> Other Programs
//               </button>

//               <ul
//                 className="dropdown-menu"
//                 aria-labelledby="programDropdown"
//                 style={{ alignItems: "center", margin: "10px", alignContent: "center" }}
//               >
//                 {schools &&
//                   schools.map((school) => (
//                     <li key={school.SchoolId} className="p-3">
//                       <div
//                         onClick={() => {
//                           localStorage.setItem("schoolId", school.schoolId);
//                         }}
//                       >
//                         <Link to="/programs" state={{ schoolId: school.SchoolId }}>
//                           <FaBook /> {school.SchoolName}
//                         </Link>
//                       </div>
//                     </li>
//                   ))}
//               </ul>
//             </div>

//             <h5 className="mt-3">
//               <FaQuestionCircle /> Help Center
//             </h5>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Header />
//       <Body />
//     </div>
//   );
// }














// import React, { useEffect, useState } from "react";
// import { fetchWithAuth } from "../../assets/tokenservice";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaUserCircle, FaBook, FaCalendarAlt, FaQuestionCircle, FaCog, FaSignOutAlt } from "react-icons/fa";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { apiUrl } from "../../../env";
// import { fetchWithAuth } from "../../fetchWithToken";


// export function Studentportal() {
//   const [student, setStudent] = useState(null);
//   const [enrolledCourses, setEnrolledCourses] = useState([]);
//   const [availableCourses, setAvailableCourses] = useState([]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   // const studentId = "SIST/28983/NA";
//   // const studentId = "SIST/73679/NA"

//   // / Header Component
//   function Header() {
//     const [show, setshow] = useState(false);
//     function logout() {
//     // Remove tokens from storage
//     localStorage.removeItem('access');
//     localStorage.removeItem('refresh');
//     console.log('Logged out successfully');
//     // Optionally redirect to login page
//     window.location.href = '/';
//     }

//     return (
//       <nav className="navbar navbar-expand-lg navbar-light  text-white p-3" style={{ backgroundColor: "#0d0a2c" }}>
//         <a className="navbar-brand text-white" href="#">
//           Ssentamu Innovation Hub Of Science And Technology - SIST Student Portal
//         </a>
//         <div className="ms-auto d-flex align-items-center">
//           <div>
//             <span className="" style={{ marginRight: "10px" }}>
//               {student?.full_name}
//             </span>
//             {student?.profilePic ? (
//               <img
//                 src={studentData.bioData.profilePic}
//                 className="rounded-circle mt-2"
//                 alt="Student"
//                 style={{ width: "50px", height: "50px" }}
//                 onClick={() => setshow((prev) => !prev)}
//               />
//             ) : (
//               <FaUserCircle size={30} className="cursor-pointer" onClick={() => setshow((prev) => !prev)} />
//             )}
//           </div>
//         </div>
//         {show && (
//           <div className="position-absolute bg-white shadow rounded p-3" style={{ right: "10px", top: "50px" }}>
//             <button className="btn btn-outline-success w-100 mb-2">
//               <FaCog /> Settings
//             </button>
//             <a onClick={() => logout()} className="btn btn-outline-danger w-100">
//               <FaSignOutAlt /> Logout
//             </a>
//           </div>
//         )}
//       </nav>
//     );
//   }


//   // accessing student is
//   const user_id = localStorage.getItem("user_id");

//   const formatDate = (dateStr) =>
//     new Date(dateStr).toLocaleDateString("en-GB");

//   const fetchStudentDetails = async () => {
//     const encodedId = encodeURIComponent(user_id);
//     const accessToken = localStorage.getItem("access")
//       try {
//         const res = await fetch(`${apiUrl}students/studentenrollmentdetails/?pk=${encodedId}`,{
//           method : "GET",
//           headers:{
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${accessToken}`,
//           }
//         } );
//         if (!res.ok) throw new Error("Failed to fetch student data");
//         const data = await res.json();

//         // Extract basic info
//         const baseStudent = {
//           student_id: data[0].student_id,
//           full_name: data[0].full_name,
//           email: data[0].email,
//           country: data[0].country,
//           gender: data[0].gender,
//           phone_number: data[0].phone_number,
//         };
//         setStudent(baseStudent);

//         // If student has enrolled course(s)
//         if (data[0].course_code) {
//           const enrolled = data.map((item) => ({
//             ...item,
//           }));
//           setEnrolledCourses(enrolled);
//         } else {
//           setEnrolledCourses([]);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     };

//   const fetchAvailableCourses = async () => {
//     try {
//       const res = await fetch(`${apiUrl}schools/createcourse/`);
//       if (!res.ok) throw new Error("Failed to fetch available courses");
//       const data = await res.json();
//       setAvailableCourses(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Load data
//   useEffect(() => {
//     fetchStudentDetails();
//     fetchAvailableCourses();
//   }, []);

//   // Filter available courses based on enrolled ones
//   useEffect(() => {
//     if (availableCourses.length > 0 && student) {
//       const enrolledCodes = new Set(enrolledCourses.map((c) => c.course_code));
//       const filtered = availableCourses.filter(
//         (course) => !enrolledCodes.has(course.course_code)
//       );
//       setFilteredCourses(filtered);
//     }
//   }, [availableCourses, enrolledCourses, student]);

//   // Handle enrollment
//   const handleEnrollment = (course) => {
//     const studentid = document.getElementById("studentid").dataset.studentId;
//     const courseDetails = {
//       course: course.id,
//       student: studentid,
//     };

//     fetch(`${apiUrl}schools/enrollStudent/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(courseDetails),
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to enroll");
//         return res.json();
//       })
//       .then(() => {
//         // Refresh student data after enrollment
//         fetchStudentDetails();
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   if (!student) {
//     return <div className="container py-4">Loading student data...</div>;
//   }
//   console.log(student)

//   return (
//     <>
//       {/* Top Navbar */}
//       < Header />
//     {/* Dashboard Content */}
//       <div className="container py-4">
//         {/* <div className="bg-success text-white p-4 rounded mb-4">
//           <h2>Welcome back, {student.full_name.split(" ")[0]}!</h2>
//           <p id="studentid" data-student-id={student.student_id}>
//             Student ID: {student.student_id}
//           </p>
//         </div> */}

//       <div className="row mb-4">
//         <div className="col-md-4">
//           <div className="card text-center">
//             <div className="card-body">
//               <h5 className="card-title">{enrolledCourses.length}</h5>
//               <p className="card-text">Enrolled Courses</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card text-center">
//             <div className="card-body">
//               <h5 className="card-title">Active</h5>
//               <p className="card-text">Student Status</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card text-center">
//             <div className="card-body">
//               <h5 className="card-title">{filteredCourses.length}</h5>
//               <p className="card-text">Available Courses</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {enrolledCourses.length > 0 && (
//         <div className="mb-4">
//           <h4>My Enrolled Courses</h4>
//           <div className="row">
//             {enrolledCourses.map((course, i) => (
//               <div className="col-md-6 mb-3" key={i}>
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-title">{course.course_name}</h5>
//                     <span className="badge bg-success mb-2">{course.status}</span>
//                     <p className="card-text">
//                       {formatDate(course.start_date)} -{" "}
//                       {formatDate(course.end_date)}
//                     </p>
//                     <button
//                       className="btn btn-outline-primary"
//                       onClick={() => {
//                         setSelectedCourse(course);
//                         setShowModal(true);
//                       }}
//                     >
//                       Access Course Material
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {filteredCourses.length > 0 && (
//         <div className="mb-4">
//           <h4>Available Courses</h4>
//           <div className="row">
//             {filteredCourses.map((course) => (
//               <div className="col-md-6 mb-3" key={course.id}>
//                 <div className="card">
//                   <div className="card-body">
//                     <h5 className="card-title">{course.course_name}</h5>
//                     <span className="badge bg-secondary mb-2">
//                       {course.course_code}
//                     </span>
//                     <p className="card-text">{course.course_description}</p>
//                     <p>
//                       <strong>Instructor:</strong> {course.course_instructor}
//                     </p>
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => handleEnrollment(course)}
//                     >
//                       Enroll Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {selectedCourse && showModal && (
//         <div className="modal show fade d-block" tabIndex="-1" role="dialog">
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">{selectedCourse.course_name}</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={() => setShowModal(false)}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <button
//                   className="btn btn-outline-primary w-100 mb-2"
//                   onClick={() =>
//                     window.open(selectedCourse.youtube_link, "_blank")
//                   }
//                 >
//                   Course Material
//                 </button>
//                 <button
//                   className="btn btn-outline-secondary w-100 mb-2"
//                   onClick={() => window.open("https://meet.google.com/", "_blank")}
//                 >
//                   Live Class
//                 </button>
//                 <button
//                   className="btn btn-outline-success w-100"
//                   onClick={() => window.open("https://drive.google.com/", "_blank")}
//                 >
//                   Recordings
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>

    
//     </>
    
//   );
// }


import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../../fetchWithToken"; // ensure this is correctly implemented
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaCog, FaSignOutAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { apiUrl } from "../../../env";

export function Studentportal() {
  const [student, setStudent] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const user_id = localStorage.getItem("user_id");
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/signin");
  }

  const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light text-white p-3" style={{ backgroundColor: "#0d0a2c" }}>
      <a className="navbar-brand text-white" href="#">
        Ssentamu Innovation Hub Of Science And Technology - SIST Student Portal
      </a>
      <div className="ms-auto d-flex align-items-center">
        <span style={{ marginRight: "10px" }}>{student?.full_name}</span>
        {student?.profilePic ? (
          <img
            src={student.profilePic}
            className="rounded-circle mt-2"
            alt="Student"
            style={{ width: "50px", height: "50px" }}
            onClick={() => setShow(!show)}
          />
        ) : (
          <FaUserCircle size={30} className="cursor-pointer" onClick={() => setShow(!show)} />
        )}
      </div>
      {show && (
        <div className="position-absolute bg-white shadow rounded p-3" style={{ right: "10px", top: "50px" }}>
          <button className="btn btn-outline-success w-100 mb-2"><FaCog /> Settings</button>
          <button className="btn btn-outline-danger w-100" onClick={logout}><FaSignOutAlt /> Logout</button>
        </div>
      )}
    </nav>
  );

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-GB");

  const fetchStudentDetails = async () => {
    try {
      const res = await fetchWithAuth(`${apiUrl}students/studentenrollmentdetails/?pk=${encodeURIComponent(user_id)}`);
      if (!res.ok) throw new Error("Failed to fetch student data");
      const data = await res.json();

      const baseStudent = {
        student_id: data[0].student_id,
        full_name: data[0].full_name,
        email: data[0].email,
        country: data[0].country,
        gender: data[0].gender,
        phone_number: data[0].phone_number,
      };
      setStudent(baseStudent);

      if (data[0].course_code) {
        setEnrolledCourses(data);
      } else {
        setEnrolledCourses([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAvailableCourses = async () => {
    try {
      const res = await fetchWithAuth(`${apiUrl}schools/createcourse/`);
      if (!res.ok) throw new Error("Failed to fetch available courses");
      const data = await res.json();
      setAvailableCourses(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEnrollment = async (course) => {
    const studentid = student.student_id;
    const courseDetails = {
      course: course.id,
      student: studentid,
    };

    try {
      const res = await fetchWithAuth(`${apiUrl}schools/enrollStudent/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(courseDetails),
      });

      if (!res.ok) throw new Error("Failed to enroll");
      await res.json();
      fetchStudentDetails();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStudentDetails();
    fetchAvailableCourses();
  }, []);

  useEffect(() => {
    if (availableCourses.length && student) {
      const enrolledCodes = new Set(enrolledCourses.map(c => c.course_code));
      const filtered = availableCourses.filter(course => !enrolledCodes.has(course.course_code));
      setFilteredCourses(filtered);
    }
  }, [availableCourses, enrolledCourses, student]);

  if (!student) return <div className="container py-4">Loading student data...</div>;

  return (
    <>
      <Header />
      <div className="container py-4">
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{enrolledCourses.length}</h5>
                <p className="card-text">Enrolled Courses</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Active</h5>
                <p className="card-text">Student Status</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">{filteredCourses.length}</h5>
                <p className="card-text">Available Courses</p>
              </div>
            </div>
          </div>
        </div>

        {enrolledCourses.length > 0 && (
          <div className="mb-4">
            <h4>My Enrolled Courses</h4>
            <div className="row">
              {enrolledCourses.map((course, i) => (
                <div className="col-md-6 mb-3" key={i}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{course.course_name}</h5>
                      <span className="badge bg-success mb-2">{course.status}</span>
                      <p className="card-text">
                        {formatDate(course.start_date)} - {formatDate(course.end_date)}
                      </p>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => {
                          setSelectedCourse(course);
                          setShowModal(true);
                        }}
                      >
                        Access Course Material
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {filteredCourses.length > 0 && (
          <div className="mb-4">
            <h4>Available Courses</h4>
            <div className="row">
              {filteredCourses.map(course => (
                <div className="col-md-6 mb-3" key={course.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{course.course_name}</h5>
                      <span className="badge bg-secondary mb-2">{course.course_code}</span>
                      <p className="card-text">{course.course_description}</p>
                      <p><strong>Instructor:</strong> {course.course_instructor}</p>
                      <button className="btn btn-primary" onClick={() => handleEnrollment(course)}>
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCourse && showModal && (
          <div className="modal show fade d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedCourse.course_name}</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <button className="btn btn-outline-primary w-100 mb-2" onClick={() => window.open(selectedCourse.youtube_link, "_blank")}>
                    Course Material
                  </button>
                  <button className="btn btn-outline-secondary w-100 mb-2" onClick={() => window.open("https://meet.google.com/", "_blank")}>
                    Live Class
                  </button>
                  <button className="btn btn-outline-success w-100" onClick={() => window.open("https://drive.google.com/", "_blank")}>
                    Recordings
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
