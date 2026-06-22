import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: 'Technical Tools',
      skills: ['ANSYS Maxwell', 'MATLAB', 'Simulink', 'SOLIDWORKS', 'AutoCAD', 'ETAP', 'ERP']
    },
    {
      category: 'Software & Platforms',
      skills: ['MS Office', 'Google Workspace', 'PLC Programming', 'Industry 4.0', 'IIoT']
    },
    {
      category: 'Engineering Domains',
      skills: ['Electrical Machines', 'Power Systems', 'Industrial Automation', 'Control Systems', 'EV Technology']
    },
    {
      category: 'Soft Skills',
      skills: ['Teamwork & Collaboration', 'Adaptability', 'Experimentation', 'Multitasking', 'Leadership']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technical proficiencies and core competencies</p>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-category fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3>{cat.category}</h3>
              <div className="skills-list">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div className="skill-level"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
