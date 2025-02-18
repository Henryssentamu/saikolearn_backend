import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { HomeNav } from "../subcomponets/headers/homepage";
import { Footer } from "../subcomponets/headers/home";

export function AdmissionPolicy() {
  const stylings = {
    padding: "20px",
  };
  return (
    <div>
      {/* navbar */}
      <HomeNav />
      <div className="poppins-regular" style={{ margin: "135px 10px", padding: "20px", fontSize: "21px" }}>
        <div className="poppins-regular ">
          <h1 className="poppins-black m-2">saikolearn admission policy</h1>
        </div>

        <div>
          At saikolearn, we are dedicated to providing a transparent and equitable admission process to ensure every applicant has a fair
          opportunity to join our esteemed programs. This policy serves as a comprehensive guide, outlining the expectations for prospective
          saikolearn applicants throughout the admission process and as integral members of our vibrant community. It also elucidates the
          consequences associated with any form of misconduct during the application phase.
          <h2 className="poppins-medium" style={stylings}>
            Fair Chance for All Applicants
          </h2>
          We believe in fostering a community that values diversity, equal opportunity, and inclusivity. The saikolearn admission process is
          designed to provide every applicant with an unbiased and fair assessment. Regardless of background or circumstances, each
          candidate is given an equal chance to showcase their unique qualities, experiences, and aspirations.
          <h2 className="poppins-medium" style={stylings}>
            Expectations During the Admission Process
          </h2>
          <ul>
            <li>
              <span className="poppins-medium"> Honesty and Authenticity:</span> Applicants are encouraged to present their genuine selves,
              showcasing their true abilities, experiences, and motivations.
            </li>
            <li>
              <span className="poppins-medium"> Respectful Conduct</span> Treat fellow applicants, saikolearn staff, and any involved
              parties with respect and courtesy throughout the admission process.
            </li>
            <li>
              <span className="poppins-medium">Submission Integrity </span> All submitted materials, including essays, documentation, and
              responses, should be the original work of the applicant, free from plagiarism or misrepresentation.
            </li>
          </ul>
          <h2 className="poppins-medium" style={stylings}>
            Community Engagement and Responsibilities
          </h2>
          Once accepted into the saikolearn community, members are expected to uphold the values of collaboration, innovation, and respect.
          This includes active participation in community events, engagement with fellow members, and contributing positively to the
          learning environment.
          <h2 className="poppins-medium" style={stylings}>
            Consequences of Misconduct
          </h2>
          Misconduct during admission process and there after undermines the principles of fairness and equality we strive to maintain.
          Consequences for such behavior may include disqualification from the current application cycle or future cycles. saikolearn
          reserves the right to take appropriate action based on the severity and nature of the misconduct.
          <h2 className="poppins-medium" style={stylings}>
            Enforcement of Fair and Consistent Measures
          </h2>
          saikolearn is committed to enforcing fair and consistent measures to safeguard the well-being of all applicants. Our team
          diligently reviews each application, ensuring that decisions are made impartially and in alignment with our commitment to
          diversity and inclusion. By adhering to these guidelines, saikolearn aims to create an environment where every applicant can
          thrive and contribute to the vibrant community of learners dedicated to personal and professional growth.
          <h2 className="poppins-medium" style={stylings}>
            Submission Deadlines
          </h2>
          All applicants are required to comply with the designated application or program confirmation deadlines. Submissions received
          after the specified deadlines may not be considered, unless explicitly stated otherwise by saikolearn. If there is a compelling
          and unavoidable reason for a late submission, saikolearn will assess the circumstances. The acceptance or rejection of a late
          submission is solely at the discretion of saikolearn, contingent upon their review of the provided justification.
          <h1 className="poppins-medium" style={stylings}>
            Enrollment Restrictions
          </h1>
          <ul className="poppins-regular" style={{ fontSize: "21px" }}>
            <li>
              <span className="poppins-medium">Applying to more than one Programme:</span>To meet training prerequisites and uphold the
              rigorous nature of our programs, saikolearn allows learners to be enrolled in only one program concurrently. If you have
              already applied for or are presently enrolled in a program, you are ineligible to apply for another program during that
              period.
            </li>

            <li>
              <span className="poppins-medium">Reapplying:</span>
              Applicants who face rejection from a program are eligible to reapply for future cohorts, including the immediate cohort
              following the one from which they were declined. However, saikolearn does not allow applicants to reapply within the same
              cohort that resulted in rejection. It is advisable for applicants to take the necessary time for self-reflection, identifying
              areas for improvement before considering reapplication to the subsequent cohort
            </li>

            <li>
              <span className="poppins-medium">Reapplication Guidelines:</span>
              Applicants who face rejection from a program are eligible to reapply for future cohorts, including the immediate cohort
              following the one from which they were declined. However, saikolearn does not allow applicants to reapply within the same
              cohort that resulted in rejection. It is advisable for applicants to take the necessary time for self-reflection, identifying
              areas for improvement before considering reapplication to the subsequent cohort
            </li>
            <li>
              <span className="poppins-medium">Application Fee:</span> saikolearn is dedicated to providing clarity and transparency in our
              admission process, including the financial aspects. To ensure that applicants have easy access to relevant information, our
              application forms for each course explicitly outline the fee structure.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
