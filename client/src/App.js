import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Routes from "./Routes";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
