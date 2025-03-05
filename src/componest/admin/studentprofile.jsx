import { useState } from "react";

// 🔹 Student Profile Page
export function StudentProfile() {
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

  const { regNo } = useParams();
  const student = students.find((s) => s.regNo === regNo);

  if (!student) {
    return <h3 className="text-danger text-center mt-5">Student Not Found</h3>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">{student.name}'s Profile</h2>
      <div className="card shadow-sm p-4 mt-4">
        <h4>Registration Number: {student.regNo}</h4>
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
        <Link to="/" className="btn btn-secondary">
          Back to Student List
        </Link>
      </div>
    </div>
  );
}
