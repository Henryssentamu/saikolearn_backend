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
import { AdminDashboard } from "./componest/admin/dashboard";
import { AdminSchoolDashboard } from "./componest/admin/schoolAdminDashbord";
import { AdminCourseDashboard } from "./componest/admin/courseDashboard";
// import { AdminCourseDashboard } from "./componest/admin/courseDashboard";
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
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/school" element={<AdminSchoolDashboard />} />
          <Route path="/courses" element={<AdminCourseDashboard />} />
          {/* <Route path="/courses" element={<AdminCourseDashboard />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
