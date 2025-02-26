import React from "react";
// import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Resume/>
      <Skills/>
      <Contact/>
    </div>
     
  );
}

export default App;

