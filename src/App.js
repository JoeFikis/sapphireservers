import React from "react";
import { Suspense , lazy } from 'react';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import './App.css'

const Home = lazy(() => import('./Components/Pages/Home/Home'));
const About = lazy(() => import('./Components/Pages/About/About'));
const NotFound = lazy(() => import("./Components/Pages/404 Page/404"))


function App() {

  return (
    <>
  <Navbar sticky="top" />

      <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
        </Suspense>
      </Router>
    </>
  );
}



export default App;
