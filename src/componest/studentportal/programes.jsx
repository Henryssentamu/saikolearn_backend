// import React, { useState } from "react";
// import { FaBook } from "react-icons/fa"; // For the course icon
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { useLocation } from "react-router-dom";

// // Header Component
function Header() {
  const [show, setshow] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">
          Student Portal
        </a>
        <div className="ml-auto d-flex">
          <a className="nav-link" href="/studentportal" style={{ color: "white" }}>
            Back
          </a>
        </div>
      </div>
    </nav>
  );
}

// export function ProgramCourses() {
//   const schoolId = useLocation.state?.schoolId;
//   const [programs] = useState({
//     softwareEngineering: { schoolId: "12233", courseDetails: [{ courseId: "233333", courseName: "Introduction To Programming" }] },
//     dataScience: { schoolId: "156666", courseDetails: [{ courseId: "1233", courseName: "Introduction To Machine Learning" }] },
//   });

//   //   const handleCourseClick = async (program, course) => {
//   //     try {
//   //       const response = await fetch("https://your-backend-api.com/api/courses", {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify({
//   //           program,
//   //           courseId: course.courseId,
//   //           courseName: course.courseName,
//   //         }),
//   //       });

//   //       if (!response.ok) {
//   //         throw new Error("Failed to send course data");
//   //       }

//   //       const data = await response.json();
//   //       alert(`Successfully sent course: ${course.courseName}`);
//   //       console.log("Server response:", data);
//   //     } catch (error) {
//   //       console.error("Error:", error);
//   //       alert("Something went wrong while sending the course.");
//   //     }
//   //   };

//   return (
//     // header
//     <div>
//       <Header />
//       <div className="container py-5">
//         <h2 className="text-center mb-4">Programs and Courses</h2>

//         <div className="row row-cols-1 row-cols-md-2 g-4">
//           {Object.entries(programs).map(([programKey, programData]) => (
//             <div className="col" key={programKey}>
//               <div className="card shadow-sm border-light rounded">
//                 <div className={`card-header text-center text-white ${programKey === "softwareEngineering" ? "bg-primary" : "bg-success"}`}>
//                   <FaBook className="me-2" />
//                   {programKey.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
//                 </div>
//                 <div className="card-body">
//                   <ul className="list-group">
//                     {programData.courseDetails.map((course) => (
//                       <li
//                         key={course.courseId}
//                         className="list-group-item list-group-item-action"
//                         onClick={() => handleCourseClick(programKey, course)}
//                         role="button"
//                       >
//                         {course.courseName}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export function ProgramCourses() {
  const location = useLocation();
  const schoolId = location.state?.schoolId;

  const [programs] = useState({
    softwareEngineering: {
      schoolId: "12233",
      courseDetails: [{ courseId: "233333", courseName: "Introduction To Programming" }],
    },
    dataScience: {
      schoolId: "156666",
      courseDetails: [{ courseId: "1233", courseName: "Introduction To Machine Learning" }],
    },
  });

  //   const handleCourseClick = async (programKey, course) => {
  //     try {
  //       const response = await fetch("https://your-backend-api.com/api/courses", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           program: programKey,
  //           courseId: course.courseId,
  //           courseName: course.courseName,
  //         }),
  //       });

  //       if (!response.ok) throw new Error("Failed to send course data");

  //       const data = await response.json();
  //       alert(`Successfully sent course: ${course.courseName}`);
  //       console.log("Server response:", data);
  //     } catch (error) {
  //       console.error("Error:", error);
  //       alert("Something went wrong while sending the course.");
  //     }
  //   };

  // 🔍 Filter for only the selected program
  const filteredEntries = Object.entries(programs).filter(([, programData]) => programData.schoolId === schoolId);

  return (
    <div>
      {/* header */}
      <Header />
      <div className="container py-5">
        <h2 className="text-center mb-4">Program Details</h2>

        {filteredEntries.length === 0 ? (
          <div className="alert alert-warning text-center">No program found for school ID: {schoolId}</div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {filteredEntries.map(([programKey, programData]) => (
              <div className="col" key={programKey}>
                <div className="card shadow-sm border-light rounded">
                  <div
                    className={`card-header text-center text-white ${programKey === "softwareEngineering" ? "bg-primary" : "bg-success"}`}
                  >
                    <FaBook className="me-2" />
                    {programKey.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </div>
                  <div className="card-body">
                    <ul className="list-group">
                      {programData.courseDetails.map((course) => (
                        <li
                          key={course.courseId}
                          className="list-group-item list-group-item-action"
                          onClick={() => handleCourseClick(programKey, course)}
                          role="button"
                        >
                          {course.courseName}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
