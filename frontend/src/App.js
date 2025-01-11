import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </nav> */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}

export default App;
