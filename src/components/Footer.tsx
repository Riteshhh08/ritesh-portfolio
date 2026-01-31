import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Riteshhh08" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/ritesh-vishwakarma08/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Portfolio of <a href="https://www.linkedin.com/in/ritesh-vishwakarma08/" target="_blank" rel="noreferrer">Ritesh Vishwakarma</a> — riteshvishwakarma.work@gmail.com | +91 9044942437</p>
    </footer>
  );
}

export default Footer;