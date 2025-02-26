import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Particles from "./components/Particles/Particles";
import Home from "./Contents/Home/Home";
import Project from "./components/Carousel/Project";
import Projects from "./Contents/Projects/Projects";
import Contact from "./Contents/Contact/Contact";

const App = () => {
  // ! I ENDED HERE TO GET THE SCROLL FADE OUT OF THE NAVIGATION
  return (
    <main>
      <Nav />

      <div className="main-content">
        <Home />
        <Project />
        <Projects />
        <Contact />
      </div>
      <div
        style={{
          width: "100%",
          height: "100svh",
          position: "fixed",
          top: "0",
          left: "0",
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </main>
  );
};

export default App;
