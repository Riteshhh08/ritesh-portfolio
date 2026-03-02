import React from "react";
import "../assets/styles/LinkedInBanner.scss";

function LinkedInBanner() {
  return (
    <section className="linkedin-section">
      <div className="linkedin-card">
        <div className="linkedin-image-wrapper">
          <img
            src="/linkedin-banner.png"
            alt="LinkedIn banner encouraging visitors to connect"
            className="linkedin-image"
            loading="lazy"
          />
        </div>
        <div className="linkedin-content">
          <h2>Don&apos;t forget to connect on LinkedIn</h2>
          <p>
            Stay in touch for future collaborations, cloud projects, and opportunities. I regularly
            share updates about full stack development, DevOps, and learning in public.
          </p>
          <a
            href="https://www.linkedin.com/in/ritesh-vishwakarma08/"
            target="_blank"
            rel="noreferrer"
            className="linkedin-button"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default LinkedInBanner;

