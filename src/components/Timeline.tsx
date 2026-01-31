import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Dec 2024 - Present"
            iconStyle={{ background: '#9333ea', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Java Full Stack Development Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">Q Spider</h4>
            <p>
              Intensive training in Core Java, Spring, Hibernate, SQL, and frontend tools (HTML, CSS, JavaScript, React). Hands-on projects, coding challenges, and practical assignments to build full-stack expertise.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2024 - July 2024"
            iconStyle={{ background: '#9333ea', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Cloud Counselage</h4>
            <p>
              Conducted thorough testing and debugging of web applications. Developed responsive web pages using HTML, CSS, and JavaScript. Participated in weekly team meetings and brainstorming for technical solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Nov 2021 - May 2025"
            iconStyle={{ background: '#9333ea', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Engineering in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Mumbai, MGM College of Engineering and Technology, Kamothe — 7.5 CGPA</h4>
            <p>
              Core coursework in Data Structures, OOP, Software Methodology, Agile, Computer Networks, Operating Systems, and Database Management.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Aug 2019 - May 2021"
            iconStyle={{ background: '#9333ea', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Higher Secondary Certificate</h3>
            <h4 className="vertical-timeline-element-subtitle">Dr. D.Y. Patil School And Junior College — 90%</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
