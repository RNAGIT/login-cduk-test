
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Loginpage";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
