import React from 'react';
import { FiBook, FiAward } from 'react-icons/fi';
import './Education.css';

function Education() {
  const education = [
    {
      degree: 'B-Tech: Electrical Engineering',
      institution: 'Sanjivani College of Engineering, Kopargaon',
      period: '2022–2026',
      details: 'CGPA: 8.18 / 10',
      icon: <FiBook />
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Shree Chhatrapati Shivaji Junior College, Kolpewadi',
      period: '2020–2022',
      details: 'Percentage: 58.50%',
      icon: <FiAward />
    },
    {
      degree: 'ITI-Fitter: Industrial Training',
      institution: 'Government Industrial Training Institute, Kopargaon',
      period: '2017–2019',
      details: 'Percentage: 78.93%',
      icon: <FiBook />
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Shree Chhatrapati Shivaji Vidyalaya, Kolpewadi',
      period: '2015–2016',
      details: 'Percentage: 68.00%',
      icon: <FiAward />
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic journey and achievements</p>

        <div className="education-list">
          {education.map((edu, index) => (
            <div key={index} className="education-item fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="education-icon">{edu.icon}</div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="period">{edu.period}</p>
                <p className="details">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
