import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
      <div className="row">
        <div className="col" style={{ backgroundColor: "rgb(230, 240, 254);" }}>
          <div className=" d-flex flex-row align-items-center p-1 poppins-medium">
            <div>School Of Software Enginering</div>
            <div className=" border-start border-3 mx-3" style={{ height: "30px" }}></div>
            <div>saikolearn</div>
          </div>
          <div className="row ">
            <h3 className="poppins-black">Introduction to Programing</h3>
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
            <a href="#" className="btn btn-outline-success " style={{ margin: "15px 20px", padding: "5px 50px" }}>
              apply
            </a>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="" style={{ backgroundColor: "#0d0a2c", color: "white", padding: "20px 48px" }}>
          <div>Admission Requirements</div>
          <div className="" style={{ backgroundColor: "#002b56", padding: "10px 10px" }}>
            <div className="">
              <div className="">Eductaion background</div>A recommendation is to possess an A-level or college certificate. Alternatively,
              successful completion of mathematics at the O-level or high school level is also acceptable.
            </div>
            <div className="">
              <div className="">Language Proficiency:</div>
              The course is conducted in English, so applicants must have a basic understanding of the English language to effectively
              engage with the curriculum and participate in discussions.
            </div>

            <div class="">
              <div className="">Assessment:</div>
              No Entry assessment for this Course
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
