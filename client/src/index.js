import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

// Routeların çalışması için <App /> öğesini düzenlemeniz gerekir
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
