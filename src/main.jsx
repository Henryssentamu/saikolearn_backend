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
        </Routes>
      </Router>
    </div>
  );
}
