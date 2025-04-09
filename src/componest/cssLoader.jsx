import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "../styling/Loader.css";

export function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="loader-button"></div>
    </div>
  );
}
