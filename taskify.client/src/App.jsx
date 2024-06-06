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

import Dev from "./views/Dev";
import Front from "./views/Front";
import Back from "./views/Back";
import Profile from "./views/Profile";

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

        <Route path="/dev" element={<Dev />} />
        <Route path="/front" element={<Front />} />
        <Route path="/back" element={<Back />} />

        <Route path="/profile" element={<Profile />} />



      </Routes>
    </Router>
  );
}

export default App;
