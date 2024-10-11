import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./components/About.js";

import ParticlesBg from "particles-bg";
// import Rain from "./components/Rain.js";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
 

  let browserWidth = window.innerWidth;
  let browserHeight = window.innerHeight;


  let randomParticles = {
    num: [8, 14],
    rps: 0.2,
    radius: [5, 10],
    life: [0.5, 1],
    v: [0.1, 0.5],
    tha: [0, 360],
    alpha: [0.6, 0],
    scale: [0.3, 0.6],
    position: "all",
    color: ["#ADD8E6"],
    cross: "dead",
    random: 15,
    g: 0,
    f: [0, 1],
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.arc(particle.p.x, particle.p.y, particle.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = `rgba(173, 216, 230, ${particle.alpha})`;
      ctx.fill();
      ctx.closePath();
    },
  };

  let snowConfig = {
    num: [2, 3],
    rps: 0.05,
    radius: [2, 5],
    life: [0, 100],
    v: [0.0001, 0.0001],
    tha: 0,
    rotate: [0, 0],
    alpha: [0.6, 0],
    scale: [1, 0.8],
    position: "all",
    color: ["#D3D1D154", "rgba(255, 255, 255, 0.8)"],
    cross: "dead",
    random: 5,
    g: 0.3,
    f: [-0.3 * Math.random(), 0],
    onParticleUpdate: (ctx, particle) => {
      if (particle.isNew) {
        particle.p.x = Math.random() * browserWidth;
        particle.p.y = Math.random() * -browserHeight;
        particle.vx = Math.random() * (2 - 1) + 1;
        particle.vy = Math.random() * 1;
        particle.isNew = false;
      }
      ctx.beginPath();
      ctx.arc(particle.p.x, particle.p.y, particle.radius, 0, 2 * Math.PI);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    },
  };

  let rainConfig = {
    num: [5,10 ], // Number of raindrops
    rps: 0.1, // Release per second
    radius: [0.5, 5], // Thickness of the raindrops
    life: [1.5, 3], // Lifespan of particles
    v: [2, 3], // Velocity range
    tha: 180, // Angle (180 degrees for vertical)
    rotate: [0, 0],
    alpha: [0.06, 0.02], // Transparency
    scale: [1, 0.5],
    position: "all", 
    color: ["#ADD8E6"], 
    cross: "dead",
    random: 10,
    g: 0, // Gravity
    f: [0, 0], 
    onParticleUpdate: (ctx, particle) => {
      
      ctx.beginPath();
      ctx.moveTo(particle.p.x, particle.p.y);
      ctx.lineTo(particle.p.x, particle.p.y + 15); 
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = particle.radius;
      ctx.stroke();
      ctx.closePath();
    },
  };



  let rainGrey = {
    num: [5, 10], 
    rps: 0.1, 
    radius: [0.5, 5], 
    life: [1.5, 3], 
    v: [2, 3], 
    tha: 180, 
    rotate: [0, 0],
    alpha: [0.2, 0.05],
    scale: [1, 0.5],
    position: "all", 
    color: ["#D3D1D154", "rgba(255, 255, 255, 0.8)"], 
    cross: "dead",
    random: 10,
    g: 0, 
    f: [0, 0], 
    onParticleUpdate: (ctx, particle) => {
      if (particle.isNew) {
        // Set particle to spawn at a random x position but higher up on the screen (close to the top)
        particle.p.x = Math.random() * browserWidth;
        particle.p.y = Math.random() * -browserHeight / 4; // Spawns in the top 1/4 of the screen
        particle.vx = Math.random() * (2 - 1) + 1;
        particle.vy = Math.random() * 1;
        particle.isNew = false;
      }
      
      ctx.beginPath();
      ctx.moveTo(particle.p.x, particle.p.y);
      ctx.lineTo(particle.p.x, particle.p.y + 15); // Length of the streak
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = particle.radius;
      ctx.stroke();
      ctx.closePath();
    },
  };
  
  
  

  // to add later to change the weather on the website hopefully
  let array = [randomParticles, snowConfig, rainConfig,rainGrey];
  

  return (
    <div>
      <ParticlesBg
        type="custom"
        config={array[2]}
        bg={{
          position: "fixed",
          zIndex: -1,
        }}
      />
      {/* <Navbar /> */}
      <Routes>
        <Route index element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<About />} />
      </Routes>
    </div>
  );
}

