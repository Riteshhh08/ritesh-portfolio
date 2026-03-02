import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <section aria-labelledby="experience-heading" className="timeline-section">
          <h1 id="experience-heading">Experience</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="Dec 2024 – Present"
              iconStyle={{ background: "#9333ea", color: "rgb(39, 40, 34)" }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">Java Full Stack Development Trainee</h3>
              <h4 className="vertical-timeline-element-subtitle">QSpiders</h4>
              <ul className="timeline-list">
                <li>Hands-on training in Core Java, Spring, Hibernate, SQL, and frontend technologies.</li>
                <li>Implemented mini-projects and coding exercises focused on clean architecture and best practices.</li>
                <li>Collaborated in a lab-style environment, participating in code reviews and debugging sessions.</li>
              </ul>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2023 – 2024"
              iconStyle={{ background: "#9333ea", color: "rgb(39, 40, 34)" }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">IT Support Engineer</h3>
              <h4 className="vertical-timeline-element-subtitle">Wealthy Ways</h4>
              <ul className="timeline-list">
                <li>Provided technical support for internal systems, resolving incidents and service requests.</li>
                <li>Assisted with deployment, monitoring, and troubleshooting of web applications and infrastructure.</li>
                <li>Documented recurring issues and contributed to improving support processes and runbooks.</li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>

        <section aria-labelledby="education-heading" className="timeline-section">
          <h1 id="education-heading">Education</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="Nov 2021 – May 2025"
              iconStyle={{ background: "#9333ea", color: "rgb(39, 40, 34)" }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Engineering in Computer Science
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                University of Mumbai, MGM College of Engineering and Technology, Kamothe — 7.5 CGPA
              </h4>
              <p>
                Core coursework in Data Structures, OOP, Software Methodology, Agile, Computer Networks,
                Operating Systems, and Database Management.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Aug 2019 – May 2021"
              iconStyle={{ background: "#9333ea", color: "rgb(39, 40, 34)" }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              <h3 className="vertical-timeline-element-title">Higher Secondary Certificate (HSC)</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Dr. D.Y. Patil School and Junior College — 90%
              </h4>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>
      </div>
    </div>
  );
}

export default Timeline;
