import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyAnimals } from "./greeting.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyAnimals />
  </StrictMode>
);
