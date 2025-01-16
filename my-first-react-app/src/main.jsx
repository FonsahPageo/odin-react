import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { CustomButton } from "./practice.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomButton />
  </StrictMode>
);