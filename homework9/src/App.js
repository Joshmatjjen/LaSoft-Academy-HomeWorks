import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Landing from "./pages/Landing";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import Courses from "./pages/Courses";
import Course from "./views/Course";
import Teachers from "./pages/Teachers";
import Apply from "./pages/Apply";
import About from "./pages/About";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="container">
      <Header showBackButton={pathname === "/apply"} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<Course />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
