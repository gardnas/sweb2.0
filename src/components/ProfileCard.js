import React from "react";
import profilePic from "../img/spencerphoto.jpg";


export default function ProfileCard() {
  function linkItem(url, icon) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className={`fa ${icon}`}></span>
      </a>
    );
  }
  return (
    <div className="profile-card">
      <div className="blur-img" style={{ backgroundImage: 'url("/img/portrait-sm.png")' }}>
        <img className="portrait" loading="lazy" src={profilePic} alt="Spencer Gardner"/>
      </div>
      <h2>Spencer Gardner</h2>
      <p className="text-under-portrait"> Informatics Student at <br />
        <a href="https://www.washington.edu/" target="_blank" rel="noopener noreferrer" className="text-underline"> University of Washington Seattle </a>
        <br />
        Undergraduate Programming Tutor 👨‍💻 </p>
      <nav class="nav hidden lg:block" aria-label="In-page jump links">
        <ul className="mt-4 list-unstyled">
          <li>
            <a className="d-flex align-items-center py-2 active nav-item" href="#about">
              <span className="nav-indicator me-3"></span>
              About
            </a>
          </li>
        <li>
          <a className="d-flex align-items-center py-2 nav-item" href="#experience">
            <span className="nav-indicator me-3"></span>
            Experience
          </a>
          </li>
          <li>
          <a className="d-flex align-items-center py-2 nav-item" href="#projects">
            <span className="nav-indicator me-3"></span>
            Projects
          </a>
        </li>
        <li>
    <a className="d-flex align-items-center py-2 nav-item" href="#contact">
      <span className="nav-indicator me-3"></span>
      Contact
    </a>
  </li>
</ul>

    </nav>
      <div className="social-icons">
        {linkItem('mailto:sdgard863@gmail.com', 'fa-envelope')}
        {linkItem('https://www.linkedin.com/in/spencergard/', 'fa-linkedin')}
        {linkItem('https://github.com/gardnas', 'fa-github')}
        {linkItem('https://www.instagram.com/spence.gardner', 'fa-instagram')}
      </div>
    </div>
  );
}
