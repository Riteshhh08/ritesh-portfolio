import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '../assets/images/avatar.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        {/* Animated hero background (purple wave / neural style) */}
        <div className="hero-background" aria-hidden="true">
          <div className="hero-orb hero-orb-primary" />
          <div className="hero-orb hero-orb-secondary" />
        </div>

        <div className="image-wrapper">
          <img src={avatar} alt="Ritesh Vishwakarma" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Riteshhh08" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ritesh-vishwakarma08/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ritesh Vishwakarma</h1>
          <p>Java Full Stack Developer | Computer Science Graduate</p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            <span className="resume-btn-text resume-btn-default">Resume</span>
            <span className="resume-btn-text resume-btn-hover">Download</span>
          </a>

          <div className="mobile_social_icons">
            <a href="https://github.com/Riteshhh08" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ritesh-vishwakarma08/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;