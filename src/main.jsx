import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./componest/home";
import { AdmissionPolicy } from "./componest/admissionPolicy";
import { ContactUs } from "./componest/contactUs";
import { AboutUs } from "./componest/aboutUs";
import { SignIn } from "./componest/signin";
import { SignUp } from "./componest/signUp";
import { SchoolOfSoftwareEngineering } from "./componest/softwareEngineeringSchool";
import { SchoolOfDataScience } from "./componest/schoolOfDataScience";
import { IntroToprogramming } from "./componest/courses/introToProgramming";
import { IntroToMachineLearning } from "./componest/courses/introTomachinelearning";
import { AdminDashboard } from "./componest/admin/dashboard";
import { AdminSchoolDashboard } from "./componest/admin/schoolAdminDashbord";
import { AdminCourseDashboard } from "./componest/admin/courseDashboard";
import { DashboardOverview } from "./componest/admin/school";
import { StudentProfile } from "./componest/admin/studentprofile";
import { LecturerProfile } from "./componest/admin/lecturerprofile";
import { CourseAdminDashboard } from "./componest/admin/courses";
import { StudentApplications } from "./componest/admin/student";
import { EmployeeManagement } from "./componest/admin/employee";
import { RecruitEmployess } from "./subcomponets/forms/recruitEmployee";
import { Studentportal } from "./componest/studentportal/dashboard";
import { CourseDashboard } from "./componest/studentportal/coursedashboard";
import { ProgramCourses } from "./componest/studentportal/programes";
import { CodingProgramPage } from "./componest/courses/coursedetailsubcomponent/highschoolcodingcourse";
export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admission" element={<AdmissionPolicy />} />
          <Route path="/contactUs" element={<ContactUs />}></Route>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/schoolOfSoftwareEngineering" element={<SchoolOfSoftwareEngineering />} />
          <Route path="/schoolOfDataScience" element={<SchoolOfDataScience />} />
          <Route path="/introToProgramming" element={<IntroToprogramming />}></Route>
          <Route path="/introToMachinelearning" element={<IntroToMachineLearning />}></Route>

          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/school" element={<AdminSchoolDashboard />} />
          <Route path="/courses" element={<AdminCourseDashboard />} />
          <Route path="/schooldash" element={<DashboardOverview />} />
          <Route path="/studentprofile" element={<StudentProfile />} />
          <Route path="/tutorprofile" element={<LecturerProfile />} />
          <Route path="/courseAdminDashboard" element={<CourseAdminDashboard />} />
          <Route path="/registration" element={<StudentApplications />} />
          <Route path="/employees" element={<EmployeeManagement />} />
          <Route path="/recruitemployee" element={<RecruitEmployess />} />
          <Route path="/studentportal" element={<Studentportal />} />
          <Route path="/coursedashboard" element={<CourseDashboard />} />
          <Route path="/programs" element={<ProgramCourses />} />
          <Route path="/highschoolcoding" element={ < CodingProgramPage />}/>
        </Routes>
      </Router>
    </div>
  );
}
