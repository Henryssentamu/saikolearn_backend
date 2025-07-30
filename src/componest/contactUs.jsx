import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { HomeNav } from "../subcomponets/headers/homepage";
import { Footer } from "../subcomponets/footers/home";

export function ContactUs() {
  return (
    <div>
      <HomeNav />
      <div className="container py-5" style={{ marginTop: "89px" }}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center mb-4 poppins-black">Contact Us</h2>
            <p className="text-center poppins-medium">
              If you have any questions or concerns, feel free to reach out to us using the contact form below:
            </p>
            <p className="text-center poppins-medium">For immediate assistance, you can also contact us via phone or email:</p>
            <div className="text-center mb-4 poppins-regular">
              <p>
                <strong c>Office Number:</strong> +2567981066
              </p>
              <p>
                <strong>Admin's Webmail:</strong> admin@Ssentamu Innovation Hub Of Science And Technology - SISTschool.org
              </p>
            </div>

            <div className="card p-4 shadow poppins-regular">
              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name:</label>
                  <input className="form-control" type="text" name="name" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Email:</label>
                  <input className="form-control" type="email" name="email" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Phone Number:</label>
                  <input className="form-control" type="tel" name="phone" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Your Message:</label>
                  <textarea className="form-control" name="message" rows="4" required></textarea>
                </div>

                <button type="submit" className="btn  w-100" style={{ backgroundColor: "#0d0a2c", color: "white" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
