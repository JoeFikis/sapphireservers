import React from "react";
import { Suspense , lazy } from 'react';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";

const Home = lazy(() => import('./Components/Pages/Home/Home'));
const About = lazy(() => import('./Components/Pages/About/About'));


function App() {

  return (
    <>
      <Navbar />
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </Suspense>
      </Router>
    </>
  );
}



export default App;
