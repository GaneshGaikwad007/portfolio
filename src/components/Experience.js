import React from 'react';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Manufacturing Engineering Intern',
      company: 'Ola Electric',
      location: 'Bengaluru, Karnataka',
      period: 'June 2025 - July 2025',
      description: [
        'Worked on process and product design for new production line',
        'Developed and optimized industrial control systems',
        'Improved workflow efficiency through comprehensive analysis',
        'Collaborated with cross-functional teams in manufacturing'
      ],
      type: 'Internship'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">My career journey and accomplishments</p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item fade-in-up">
              <div className="experience-marker">
                <div className="marker-dot"></div>
              </div>
              <div className="experience-card">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <span className="exp-type">{exp.type}</span>
                </div>
                <div className="experience-company">{exp.company}</div>
                
                <div className="experience-meta">
                  <div className="meta-item">
                    <FiMapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="meta-item">
                    <FiCalendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="experience-list">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-cta">
          <p>Currently exploring opportunities in Industrial Automation, Research, and EV Domain</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
