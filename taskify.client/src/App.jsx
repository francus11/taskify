import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Welcome from "./views/Welcome";
import Register from "./views/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/reg2" element={<Welcome />} />
        <Route path="/log" element={<Welcome />} />
        <Route path="/home" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
