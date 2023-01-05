import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";



function App() {



  return (
    <>
      <Navbar />
      <Router>
        <div className="pages">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;