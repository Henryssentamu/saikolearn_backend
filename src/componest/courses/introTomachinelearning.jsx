import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { HomeNav } from "../../subcomponets/headers/homepage";
import { Footer } from "../../subcomponets/footers/home";

export function IntroToMachineLearning() {
  const instractorImage = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  };

  return (
    <div>
      <HomeNav />
      <div className="row" style={{ marginTop: "89px" }}>
        <div className="col">
          <div className="d-flex flex-row align-items-center p-1 poppins-medium">
            <div>School Of Data Science</div>
            <div className="border-start border-3 mx-3" style={{ height: "30px" }}></div>
            <div>SIST</div>
          </div>
          <div className="row">
            <h3 className="poppins-black">Introduction To Machine Learning</h3>
            <div className="text-center poppins-regular p-3" style={{ width: "500px" }}>
              This beginner-friendly course introduces you to the exciting world of machine learning. Using Python and real-world datasets,
              you'll learn how to prepare data, apply statistical reasoning, and build predictive models through both regression and
              classification techniques.
            </div>
          </div>
          <div className="col d-flex flex-row">
            <div className="d-flex flex-row">
              <img src="/techimage2.jpeg" alt="instructor" style={instractorImage} />
              <img src="/techimage2.jpeg" alt="instructor" style={instractorImage} />
            </div>
            <div className="m-2 fw-bold">Instructors</div>
          </div>
          <div className="col">
            <a href="/signin" className="btn btn-outline-success" style={{ margin: "15px 20px", padding: "5px 50px" }}>
              Apply
            </a>
          </div>
        </div>
      </div>

      <div className="row" style={{ marginTop: "100px" }}>
        <div style={{ backgroundColor: "#0d0a2c", color: "white", padding: "20px 48px" }}>
          <div style={{ padding: "20px 0px", fontSize: "36px" }} className="poppins-black">
            Admission Requirements
          </div>
          <div style={{ backgroundColor: "#002b56", padding: "10px 10px" }}>
            <div style={{ padding: "20px 0px" }}>Educational Background</div>A strong interest in mathematics or computer science is
            recommended. Prior exposure to Python or statistics is helpful but not required.
            <div style={{ padding: "20px 0px" }}>Language Proficiency</div>
            The course is delivered in English. Learners should be comfortable reading and understanding English to follow the curriculum.
            <div style={{ padding: "20px 0px" }}>Assessment</div>
            No entry assessment required.
          </div>
        </div>
      </div>

      <div className="row" style={{ margin: "50px 20px" }}>
        <div className="col">
          <h1>What you'll learn</h1>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
            <div className="col">
              <ul>
                <li>
                  <b>Python for Data Science:</b> Learn to use libraries like Pandas, NumPy, and Matplotlib to clean, analyze, and visualize
                  data.
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <b>Statistics and Probability:</b> Understand distributions, central tendency, variance, and hypothesis testing for
                  machine learning.
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <b>Regression Models:</b> Build and evaluate linear regression models to predict outcomes from numerical data.
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <b>Classification Techniques:</b> Use logistic regression and classification metrics to distinguish between categories in
                  data.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{ margin: "50px 20px" }}>
        <div className="col">
          <h2>Skills you'll gain</h2>
          <div className="row row-cols-1 row-cols-md-4 row-cols-lg-4">
            <div className="col">Python for Data Analysis</div>
            <div className="col">Statistical Thinking</div>
            <div className="col">Modeling and Evaluation</div>
            <div className="col">Machine Learning Workflow</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
