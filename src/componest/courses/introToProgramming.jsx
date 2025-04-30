import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { HomeNav } from "../../subcomponets/headers/homepage";
import { Footer } from "../../subcomponets/footers/home";

export function IntroToprogramming() {
  const instractorImage = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  };
  const requirment = {
    backgroundColor: "#002b56;",
  };
  return (
    <div>
      <HomeNav />
      <div className="row" style={{ marginTop: "89px" }}>
        <div className="col">
          <div className=" d-flex flex-row align-items-center p-1 poppins-medium">
            <div>School Of Software Enginering</div>
            <div className=" border-start border-3 mx-3" style={{ height: "30px" }}></div>
            <div>SIST</div>
          </div>
          <div className="row ">
            <h3 className="poppins-black">Introduction To Software Development</h3>
            <div className="text-center poppins-regular p-3" style={{ width: "500px" }}>
              This comprehensive course is designed to provide you with a solid foundation in programming using the versatile Python
              language. Led by our esteemed faculty of experienced professionals, including top senior engineers, you will delve into the
              world of Python and gain practical skills to create powerful and efficient applications.
            </div>
          </div>
          <div className="col d-flex flex-row ">
            <div className="d-flex flex-row">
              <img src="/techimage2.jpeg" alt="instructor" style={instractorImage} />
              <img src="/techimage2.jpeg" alt="instructor" style={instractorImage} />
            </div>
            <div className="m-2 fw-bold  ">Instructors</div>
          </div>
          <div className="col">
            <a href="/signin" className="btn btn-outline-success " style={{ margin: "15px 20px", padding: "5px 50px" }}>
              apply
            </a>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="" style={{ backgroundColor: "#0d0a2c", color: "white", padding: "20px 48px" }}>
          <div style={{ padding: "20px 0px", fontSize: "36px" }} className="poppins-black">
            Admission Requirements
          </div>
          <div className="" style={{ backgroundColor: "#002b56", padding: "10px 10px" }}>
            <div className="">
              <div className="" style={{ padding: "20px 0px" }}>
                Eductaion background
              </div>
              A recommendation is to possess an A-level or college certificate. Alternatively, successful completion of mathematics at the
              O-level or high school level is also acceptable.
            </div>
            <div className="">
              <div className="" style={{ padding: "20px 0px" }}>
                Language Proficiency:
              </div>
              The course is conducted in English, so applicants must have a basic understanding of the English language to effectively
              engage with the curriculum and participate in discussions.
            </div>

            <div class="">
              <div className="" style={{ padding: "20px 0px" }}>
                Assessment:
              </div>
              No Entry assessment for this Course
            </div>
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
                  <b>Fundamentals of Programming:</b> Learners will master Python basics, including variables, data types, control
                  structures (loops and conditionals), and functions, building a strong foundation for problem-solving and coding logic.
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <b>Object-Oriented Programming (OOP):</b> The course will cover OOP principles such as classes, objects, inheritance, and
                  polymorphism, enabling learners to design modular, reusable, and scalable software.
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <b>Data Structures and Algorithms:</b> Students will gain expertise in implementing and optimizing key data structures
                  (lists, dictionaries, stacks, etc.) and algorithms, crucial for efficient software development.
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <b>Application Development:</b> By the end, learners will acquire practical skills to build powerful, efficient software
                  applications, including debugging, testing, and working with libraries/frameworks, guided by senior engineers.
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
            <div className="col">Python Programming Proficiency</div>
            <div className="col">Software Design and Architecture</div>
            <div className="col">Problem-Solving and Algorithmic Thinking</div>
            <div className="col">Practical Application Development:</div>
          </div>
        </div>
      </div>
    </div>
  );
}
