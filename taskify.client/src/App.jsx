import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Welcome from "./views/Welcome";
import Register from "./views/Signup";
import Register2 from "./views/Signup2";
import Login from "./views/Login";
import Home from "./views/Home";
import Project from "./views/Project";
import Kanban from "./views/KanbanPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/reg2" element={<Register2 />} />
        <Route path="/log" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/proj" element={<Project />} />
        <Route path="/kanban" element={<Kanban />} />
      </Routes>
    </Router>
  );
}

export default App;
