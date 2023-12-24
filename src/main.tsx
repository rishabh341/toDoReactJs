import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ToDosProvider } from "./store/todos.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToDosProvider>
        <App />
      </ToDosProvider>
    </BrowserRouter>
  </React.StrictMode>
);
