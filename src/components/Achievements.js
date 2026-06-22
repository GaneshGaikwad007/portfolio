import React from 'react';
import { FiAward, FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import './Achievements.css';

function Achievements() {
  const achievements = {
    patents: [
      {
        title: 'Smart Solar Trolley with Load Sensing and Utility Features',
        status: 'Filed',
        date: '17 May 2025',
        regNumber: 'Design Registration No.: 459204-001'
      },
      {
        title: 'Damer Tank Handler',
        status: 'Registered',
        date: '08 May 2025',
        regNumber: 'Design Registration No.: 458158-001'
      }
    ],
    research: [
      {
        title: 'Best Paper Award, 3rd International Conference on Recent Trends in Computing (ICRTC-2025)',
        date: 'April 2025'
      },
      {
        title: 'Research Paper Published on IEEE Xplore Library',
        subtitle: 'Selected for IEEE Conference'
      }
    ],
    certifications: [
      { name: 'Industry 4.0 & IIOT', issuer: 'NPTEL – Elite + Silver' },
      { name: 'MATLAB Onramp & Simulink Certification', issuer: 'MathWorks' },
      { name: 'Career Enhancement Certificates', issuer: 'TCS-iON' },
      { name: 'Become a PLC Developer', issuer: 'LinkedIn Learning' },
      { name: 'SOLIDWORKS Essential Training', issuer: 'LinkedIn Learning' }
    ],
    workshops: [
      {
        title: 'AutoCAD Electrical Training',
        details: 'Completed training from CAD-hub Training Centre, Ahilyanagar. Topics: industrial drafting, panel design & control circuits'
      }
    ]
  };

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Awards & Achievements</h2>
        <p className="section-subtitle">Recognition of excellence and innovation</p>

        <div className="achievements-grid">
          {/* Patents */}
          <div className="achievement-card fade-in-up">
            <div className="achievement-header">
              <FiAward className="achievement-icon" />
              <h3>Patents & Designs</h3>
            </div>
            <div className="achievement-list">
              {achievements.patents.map((patent, index) => (
                <div key={index} className="achievement-item">
                  <div className="item-header">
                    <h4>{patent.title}</h4>
                    <span className={`status ${patent.status.toLowerCase()}`}>{patent.status}</span>
                  </div>
                  <p className="item-date">{patent.date}</p>
                  <p className="item-detail">{patent.regNumber}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Publications */}
          <div className="achievement-card fade-in-up">
            <div className="achievement-header">
              <FiBookOpen className="achievement-icon" />
              <h3>Research & Publications</h3>
            </div>
            <div className="achievement-list">
              {achievements.research.map((item, index) => (
                <div key={index} className="achievement-item">
                  <h4>{item.title}</h4>
                  {item.date && <p className="item-date">{item.date}</p>}
                  {item.subtitle && <p className="item-detail">{item.subtitle}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="achievement-card fade-in-up">
            <div className="achievement-header">
              <FiTrendingUp className="achievement-icon" />
              <h3>Certifications</h3>
            </div>
            <div className="achievement-list">
              {achievements.certifications.map((cert, index) => (
                <div key={index} className="achievement-item">
                  <h4>{cert.name}</h4>
                  <p className="item-detail">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workshops */}
        <div className="workshops-section">
          <h3 className="workshops-title">Workshops & Training</h3>
          <div className="workshops-content">
            {achievements.workshops.map((workshop, index) => (
              <div key={index} className="workshop-item fade-in-up">
                <h4>{workshop.title}</h4>
                <p>{workshop.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Curricular */}
        <div className="extracurricular-section">
          <h3 className="extracurricular-title">Extra-Curricular Activities</h3>
          <div className="activities-list">
            <div className="activity-item fade-in-up">
              <span className="activity-role">Professional Edge Club Lead</span>
              <span className="activity-org">Electrical Engineering Student Association (EESA)</span>
              <span className="activity-period">2023–2024</span>
            </div>
            <div className="activity-item fade-in-up">
              <span className="activity-role">Student Coordinator (T&P)</span>
              <span className="activity-org">Training and Placement</span>
              <span className="activity-period">Present & 2023–2024</span>
            </div>
            <div className="activity-item fade-in-up">
              <span className="activity-role">Departmental Magazine Committee</span>
              <span className="activity-period">2023–2024</span>
            </div>
            <div className="activity-item fade-in-up">
              <span className="activity-role">Runner-Up</span>
              <span className="activity-org">Electra Circuitry Competition, LoGMIEER Techfest 2K25</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
