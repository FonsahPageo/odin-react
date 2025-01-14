/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/style.css";

export function CreateCv({ cvData, setCvData}) {
  const [currentEducation, setCurrentEducation] = useState({});
  const [currentExperience, setCurrentExperience] = useState({});

  const handlePersonalDetailsChange = (e) => {
    setCvData((prevState) => ({
      ...prevState,
      personalDetails: {
        ...prevState.personalDetails,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleProfileChange = (e) => {
    setCvData((prevState) => ({
      ...prevState,
      profile: e.target.value,
    }));
  };

  const handleEducationChange = (e) => {
    setCurrentEducation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleExperienceChange = (e) => {
    setCurrentExperience((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const saveEducation = () => {
    setCvData((prevState) => ({
      ...prevState,
      education: [...prevState.education, currentEducation],
    }));
    setCurrentEducation({});
    console.log("Education added:", currentEducation);
  };

  const saveExperience = () => {
    setCvData((prevState) => ({
      ...prevState,
      experience: [...prevState.experience, currentExperience],
    }));
    setCurrentExperience({});
    console.log("Experience added:", currentExperience);
  };

  return (
    <div className="formContent">
      <div className="personalDetails">
        <h1>Personal Details:</h1>
        <form>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Johnny White"
            value={cvData.personalDetails.fullName}
            onChange={handlePersonalDetailsChange}
          />

          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            placeholder="Accountant"
            value={cvData.personalDetails.jobTitle}
            onChange={handlePersonalDetailsChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johnwhite23@gmail.com"
            value={cvData.personalDetails.email}
            onChange={handlePersonalDetailsChange}
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="(+237) 671-23-45-67"
            value={cvData.personalDetails.phoneNumber}
            onChange={handlePersonalDetailsChange}
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Street name, town"
            value={cvData.personalDetails.address}
            onChange={handlePersonalDetailsChange}
          />

          <div className="actionButtons">
            <button type="button" onClick={() => console.log(cvData.personalDetails)}>Save</button>
            <button>Edit</button>
          </div>
        </form>
      </div>

      <div className="profile">
        <h1>Profile</h1>
        <form>
          <textarea placeholder="Summary" name="summary" value={cvData.profile} onChange={handleProfileChange} />
          <div className="actionButtons">
            <button type="button" onClick={() => console.log(cvData.profile)}>Save</button>
            <button>Edit</button>
          </div>
        </form>
      </div>

      <div className="education">
        <h1>Education</h1>
        <form>
          <label htmlFor="school">School:</label>
          <input type="text" name="school" id="school" onChange={handleEducationChange}/>

          <label htmlFor="program">Program of Study:</label>
          <input type="text" name="program" id="program" onChange={handleEducationChange}/>

          <label htmlFor="degree">Degree conferred</label>
          <select name="degree" id="degree" onChange={handleEducationChange}>
            <option value="hnd">HND</option>
            <option value="bachelor">Bachelor</option>
          </select>

          <label htmlFor="startDate">Start Date:</label>
          <input type="date" name="startDate" id="startDate" onChange={handleEducationChange}/>

          <label htmlFor="endDate">End Date:</label>
          <input type="date" name="endDate" id="endDate" onChange={handleEducationChange}/>

          <div className="actionButtons">
            <button type="button" onClick={saveEducation}>Save</button>
            <button>Edit</button>
          </div>
        </form>
      </div>

      <div className="experience">
        <h1>Profesional Experience</h1>
        <form>
          <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" name="jobTitle" id="jobTitle" onChange={handleExperienceChange}/>

          <label htmlFor="company">Company name:</label>
          <input type="text" name="company" id="company" onChange={handleExperienceChange}/>

          <label htmlFor="startDate">Start Date:</label>
          <input type="date" name="startDate" id="startDate" onChange={handleExperienceChange}/>

          <label htmlFor="endDate">End Date:</label>
          <input type="date" name="endDate" id="endDate" onChange={handleExperienceChange}/>
          <div className="actionButtons">
            <button type="button" onClick={saveExperience}>Save</button>
            <button>Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
}