import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import LiveScore from "./LiveScore/LiveScore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <LiveScore></LiveScore>
  </React.StrictMode>
);
