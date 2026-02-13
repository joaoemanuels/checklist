import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Todoprovider } from "./components/TodoProvider/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Todoprovider>
      <App />
    </Todoprovider>
  </StrictMode>,
);
