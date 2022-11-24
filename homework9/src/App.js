import React from "react";

import Landing from "./pages/Landing";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
