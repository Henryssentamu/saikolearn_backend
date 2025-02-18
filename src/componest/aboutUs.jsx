import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomeNav } from "../subcomponets/headers/homepage";
import { Footer } from "../subcomponets/headers/home";

export function AboutUs() {
  return (
    <div>
      <HomeNav />
      <div className="container py-5" style={{ marginTop: "89px" }}>
        <div className="text-center mb-5">
          <h1 className="poppins-black">About Us</h1>
          <p className="poppins-regular">
            Facilitating career acceleration, Saikolearn delivers technology training for young technophiles, arming them with practical and
            technical expertise. This skill set is instrumental in propelling their achievements in today's digital-centric professional
            environment.
          </p>
        </div>

        <section className="row align-items-center mb-5">
          <div className="col-md-6">
            <img className="img-fluid rounded shadow" src="/techimage.jpeg" alt="Technology Training" />
          </div>
          <div className="col-md-6 mt-3">
            <h2 className="poppins-medium">What We Do</h2>
            <p className="poppins-regular">
              At the forefront of revolutionizing the tech industry, we specialize in nurturing rare tech talents through top-notch training
              and mentorship. Beyond merely molding tech professionals, we are dedicated to crafting the next generation of leaders and
              innovators poised to redefine the core of technology and set new industry benchmarks.
            </p>
          </div>
        </section>

        <section className="row align-items-center mb-5">
          <div className="col-md-6">
            <img className="img-fluid rounded shadow" src="/techimage.jpeg" alt="Vision" />
          </div>
          <div className="col-md-6 mt-3">
            <h2 className="poppins-medium">Vision</h2>
            <p className="poppins-regular">
              Elevating scientific and technological disciplines from rigid confines to a more sophisticated paradigm.
            </p>
          </div>
        </section>

        <section className="row align-items-center mb-5">
          <div className="col-md-6">
            <img className="img-fluid rounded shadow" src="/techimage.jpeg" alt="Mission" />
          </div>
          <div className="col-md-6 mt-3">
            <h2 className="poppins-medium ">Mission</h2>
            <p className="poppins-regular">
              Dedicated to catalyzing global change and enhancing the quality of life through the transformative power of technology and
              science.
            </p>
          </div>
        </section>

        <section className="text-center mb-5">
          <h1 className="poppins-meidum">Our Values</h1>
          <p className="poppins-regular">
            These values guide our operations, ensuring we stay aligned with our core mandate to stakeholders.
          </p>
        </section>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow h-100">
              <img className="card-img-top" src="/techimage.jpeg" alt="Respect" />
              <div className="card-body">
                <h5 className="card-title poppins-medium">Respect</h5>
                <p className="card-text poppins-regular">
                  Disrespect is not tolerated in our community. We highly value and respect people's cultures, beliefs, and values.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <img className="card-img-top" src="/techimage.jpeg" alt="Dedicated" />
              <div className="card-body">
                <h5 className="card-title poppins-medium">Dedicated</h5>
                <p className="card-text poppins-regular">
                  Strive to comprehend the underlying intuition behind concepts, acquire the knowledge, and leverage it for positive change.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100">
              <img className="card-img-top" src="/techimage.jpeg" alt="We're in this together" />
              <div className="card-body">
                <h5 className="card-title poppins-medium">We're in this together</h5>
                <p className="card-text poppins-regular">
                  We're a united team, supporting each other through challenges and celebrating victories together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
