/* eslint-disable react/prop-types */
import "../styles/style.css";

export function FinalCV({ cvData }) {
  const { personalDetails, profile, education, experience } = cvData || {};

  return (
    <div className="finalCv">
      <h1>Your CV</h1>
      <section>
        <h2>Personal Details</h2>
        <hr />
        <p>
          <strong>Full Name:</strong> {personalDetails?.fullName || "N/A"}
        </p>
        <p>
          <strong>Job Title:</strong> {personalDetails?.jobTitle || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {personalDetails?.email || "N/A"}
        </p>
        <p>
          <strong>Phone Number:</strong> {personalDetails?.phoneNumber || "N/A"}
        </p>
        <p>
          <strong>Address:</strong> {personalDetails?.address || "N/A"}
        </p>
      </section>

      <section>
        <h2>Profile</h2>
        <hr />
        <p>{profile || "No profile summary provided."}</p>
      </section>

      <section>
        <h2>Education</h2>
        <hr />
        {education && education.length > 0 ? (
          education.map((edu, index) => (
            <div key={index}>
              <p>
                <strong>School:</strong> {edu.school || "N/A"}
              </p>
              <p>
                <strong>Program:</strong> {edu.program || "N/A"}
              </p>
              <p>
                <strong>Degree:</strong> {edu.degree || "N/A"}
              </p>
              <p>
                <strong>Dates:</strong> {edu.startDate || "N/A"} -{" "}
                {edu.endDate || "N/A"}
              </p>
              <hr />
            </div>
          ))
        ) : (
          <p>No education details added yet.</p>
        )}
      </section>

      <section>
        <h2>Professional Experience</h2>
        <hr />
        {experience && experience.length > 0 ? (
          experience.map((exp, index) => (
            <div key={index}>
              <p>
                <strong>Job Title:</strong> {exp.jobTitle || "N/A"}
              </p>
              <p>
                <strong>Company:</strong> {exp.company || "N/A"}
              </p>
              <p>
                <strong>Dates:</strong> {exp.startDate || "N/A"} -{" "}
                {exp.endDate || "N/A"}
              </p>
              <hr />
            </div>
          ))
        ) : (
          <p>No experience details added yet.</p>
        )}
      </section>
    </div>
  );
}
