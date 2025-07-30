// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// export function Footer() {
//   return (
//     <footer style={{ backgroundColor: "#0d0a2c", color: "white", padding: "120px 0", marginTop: "130px", position: "relative" }}>
//       <div
//         className="container px-4 py-4 poppins-regular"
//         style={{ backgroundColor: "#0d0a2c", position: "absolute", top: "-95px", maxWidth: "600px", fontSize: "21px" }}
//       >
//         <div>
//           Start on a transformative educational journey in our upcoming in-takes , designed for diverse skills and interests. Join us to
//           enhance your abilities and explore new horizons.
//         </div>
//         <a href="/register" className=" btn btn-success">
//           Rigester
//         </a>
//       </div>
//       <div className="container mt-5 ">
//         <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-center">
//           <div className="col " style={{ marginTop: "100px" }}>
//             <h1>Ssentamu Innovation Hub Of Science And Technology - SIST</h1>
//             <p>
//               <b>Ssentamu Innovation Hub Of Science And Technology - SIST:</b> Your prime Tech skilling center and the ultimate blueprint for recruiting top-notch software talent.
//             </p>
//           </div>
//           <div className="col d-flex flex-column ">
//             <h1>Resources</h1>
//             <a href="#" className="link text-decoration-none text-white cursor-pointer">
//               Blog
//             </a>
//             <a href="#" className="link text-decoration-none text-white cursor-pointer">
//               Testimonials
//             </a>
//             <a href="#" className="link text-decoration-none text-white cursor-pointer">
//               careers
//             </a>
//           </div>
//           <div className="col">
//             <h1>Get in Touch</h1>
//             <p>+256755981066</p>
//             <p>info@Ssentamu Innovation Hub Of Science And Technology - SIST.org</p>
//             <p>admin@Ssentamu Innovation Hub Of Science And Technology - SIST.org</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../styling/Footer.css'; // Create a separate CSS file for styles

export function Footer() {
  return (
    <footer className="footer  text-white" style={{padding: "120px 0", marginTop: "130px"}}>
      {/* Call to Action Section */}
      <Container className="cta-container position-relative">
        <div className="cta-card footer shadow-lg p-4 p-md-5 rounded-3">
          <p className="lead mb-4">
            Embark on a transformative educational journey in our upcoming intakes, designed for diverse skills and interests. Join us to enhance your abilities and explore new horizons.
          </p>
          <Button href="/register" variant="success" size="lg">
            Register Now
          </Button>
        </div>
      </Container>

      {/* Main Footer Content */}
      <Container className="py-5">
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-4 mb-md-0">
            <h2 className="footer-brand">Ssentamu Innovation Hub Of Science And Technology - SIST</h2>
            <p className="text-muted">
              <strong>Ssentamu Innovation Hub Of Science And Technology - SIST:</strong> Your premier tech skilling center and the ultimate blueprint for recruiting top-notch software talent.
            </p>
          </Col>
          
          <Col md={4} className="mb-4 mb-md-0">
            <h3>Resources</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Testimonials</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h3>Get in Touch</h3>
            <ul className="list-unstyled">
              <li><a href="tel:+256755981066" className="footer-link">+256 755 981066</a></li>
              <li><a href="mailto:info@Ssentamu Innovation Hub Of Science And Technology - SIST.org" className="footer-link">info@ssentamuinnovationhubofscienceandtechnology.org</a></li>
              <li><a href="mailto:admin@Ssentamu Innovation Hub Of Science And Technology - SIST.org" className="footer-link">admin@ssentamuinnovationhubofscienceandtechnology.org</a></li>
            </ul>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4">
          <Col className="text-center text-muted">
            <p className="mb-0">&copy; {new Date().getFullYear()} Ssentamu Innovation Hub Of Science And Technology - SIST. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

