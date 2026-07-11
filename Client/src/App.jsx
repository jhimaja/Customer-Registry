import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddComplaint from "./pages/AddComplaint";
import MyComplaints from "./pages/MyComplaints";
import Profile from "./pages/profile";

function App() {
  return (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      <Route
  path="/add-complaint"
  element={
    <ProtectedRoute>
      <AddComplaint />
    </ProtectedRoute>
  }
/>
      <Route
  path="/my-complaints"
  element={
    <ProtectedRoute>
      <MyComplaints />
    </ProtectedRoute>
  }
/>
      <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
    </Routes>

    <Footer />
  </>
);
}

export default App;