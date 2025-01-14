import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { ClassInput } from "./practice.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClassInput />
  </StrictMode>
);