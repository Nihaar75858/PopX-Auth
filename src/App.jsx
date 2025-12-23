import LandingPage from "./pages/LandingScreen";
import LoginScreen from "./pages/LoginScreen";
import SignUpScreen from "./pages/SignUpScreen";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    option: "",
  });

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginScreen formData={formData} />} />
      <Route
        path="/signup"
        element={<SignUpScreen formData={formData} setFormData={setFormData} />}
      />
      <Route path="/profile" element={<Profile formData={formData} />} />
    </Routes>
  );
}

export default App;
