import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d0a2c", color: "white", padding: "120px 0", marginTop: "130px", position: "relative" }}>
      <div
        className="container px-4 py-4 poppins-regular"
        style={{ backgroundColor: "#0d0a2c", position: "absolute", top: "-95px", maxWidth: "600px", fontSize: "21px" }}
      >
        <div>
          Start on a transformative educational journey in our upcoming in-takes , designed for diverse skills and interests. Join us to
          enhance your abilities and explore new horizons.
        </div>
        <a href="/register" className=" btn btn-success">
          Rigester
        </a>
      </div>
      <div className="container mt-5 ">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-center">
          <div className="col " style={{ marginTop: "100px" }}>
            <h1>saikolearn</h1>
            <p>
              <b>saikolearn:</b> Your prime Tech skilling center and the ultimate blueprint for recruiting top-notch software talent.
            </p>
          </div>
          <div className="col d-flex flex-column ">
            <h1>Resources</h1>
            <a href="#" className="link text-decoration-none text-white cursor-pointer">
              Blog
            </a>
            <a href="#" className="link text-decoration-none text-white cursor-pointer">
              Testimonials
            </a>
            <a href="#" className="link text-decoration-none text-white cursor-pointer">
              careers
            </a>
          </div>
          <div className="col">
            <h1>Get in Touch</h1>
            <p>+256755981066</p>
            <p>info@saikolearn.org</p>
            <p>admin@saikolearn.org</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
