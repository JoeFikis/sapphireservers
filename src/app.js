import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";



function App() {

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <>
      <Navbar />
      <Router>
      <Routes>
        <Route onClick={refreshPage} path="/" element={<Home />} />
        <Route onClick={refreshPage}path="/about" element={<About />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;