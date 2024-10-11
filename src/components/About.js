import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

export default function About() {
  const [mobileView, setMobileView] = useState(false);
  
  const handleResize = () => {
    setMobileView(window.innerWidth < 576);
  };

  let array = [];
  array.push(mobileView);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setMobileView(window.innerWidth < 576);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const aboutContent = (
    <div className="about-content col-sm-8 col-xs-12">
      <section id="about">
        <h3 className="about-title">About</h3>
        <div className="about-card"> 
          <p>Hi! <span>👋</span></p>
          <p> I'm Spencer, a current student at the{" "}
            <a href="https://ischool.uw.edu/" target="_blank" rel="noopener noreferrer" className="text-underline">
              Information School
            </a>, University of Washington, specializing in Software Development and Data Science.
          </p>
          <p>
            I'm passionate about developing impactful, high-quality, and user-friendly applications that hopefully enrich users' lives. In my journey as a developer so far, I've built and contributed to various applications using multiple languages and frameworks.
          </p>
          <p>
            Outside the classroom and homework, I enjoy spending time reading books, playing a variety of sports, cooking, trying new restaurants, or working on personal projects. The current book that I am reading is {" "}
            <a href="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow" target="_blank" rel="noopener noreferrer" className="text-underline">
              Thinking Fast and Slow
            </a>{" "}
              by Daniel Kahneman.
          </p>
          <p>
            In the future, I hope to become a Software Developer / Engineer. Also, I hope to travel all around the world and experience many cultures and foods!
          </p>
        </div>
      </section>
    </div>
  );

  return (
    <main>
      <div className="container custom-container">
        <div className="row custom-row">
          <div className="left-column">
            <ProfileCard />
          </div>
          <div className="right-column">
            {aboutContent}
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </main>
  );
}
