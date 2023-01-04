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
      <Routes>
        <Route path="/" exact component={<Home />} />
        <Route path="about" exact component={<About />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;