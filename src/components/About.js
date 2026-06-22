import React from 'react';
import { FiTarget, FiAward, FiCode } from 'react-icons/fi';
import './About.css';

function About() {
  const highlights = [
    {
      icon: <FiTarget />,
      title: 'Focus Areas',
      description: 'Industrial Automation, Power Systems, EV Domain, Research & Development'
    },
    {
      icon: <FiAward />,
      title: 'Achievement',
      description: 'Best Paper Award at ICRTC-2025, IEEE Published Research, 2 Patents Filed'
    },
    {
      icon: <FiCode />,
      title: 'Expertise',
      description: 'ANSYS Maxwell, MATLAB, SOLIDWORKS, AutoCAD, PLC Development, Industry 4.0'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Discover my journey and what drives me</p>

        <div className="about-content">
          <div className="about-text slide-in-left">
            <h3>Passionate Electrical Engineering Professional</h3>
            <p>
              I'm a B-Tech Electrical Engineering graduate from Sanjivani College of Engineering 
              (CGPA: 8.18/10) with a strong academic foundation in Electrical Machines and Power Systems. 
              My journey has been marked by curiosity, innovation, and a commitment to excellence.
            </p>
            <p>
              Currently exploring opportunities in Industrial Automation, Research, and the EV domain. 
              With hands-on experience in manufacturing engineering at Ola Electric and multiple 
              innovative projects, I'm driven to solve real-world problems through technology.
            </p>
            <p>
              I believe in continuous learning, collaboration, and pushing boundaries. My work spans 
              from circuit design to system automation, always keeping the bigger picture in mind.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h4>2025+</h4>
                <p>Graduation Year</p>
              </div>
              <div className="stat">
                <h4>4+</h4>
                <p>Major Projects</p>
              </div>
              <div className="stat">
                <h4>2</h4>
                <p>Design Patents</p>
              </div>
              <div className="stat">
                <h4>5+</h4>
                <p>Certifications</p>
              </div>
            </div>
          </div>

          <div className="about-highlights slide-in-right">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
