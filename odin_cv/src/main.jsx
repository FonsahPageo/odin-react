import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CreateCv } from "./components/form.jsx";
import { FinalCV } from "./components/cv.jsx";


export function CvApp() {
  const [cvData, setCvData] = useState({
    personalDetails: {
      fullName: "",
      jobTitle: "",
      email: "",
      phoneNumber: "",
      address: "",
    },
    profile: "",
    education: [],
    experience: [],
  });

  return (
    <div className="container">
      <CreateCv cvData={cvData} setCvData={setCvData} />
      <FinalCV cvData={cvData} />
    </div>
  )
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CvApp />
  </StrictMode>
);
