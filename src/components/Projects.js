import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Design & Analysis of Induction Motors Using ANSYS Maxwell',
      category: 'Simulation & Analysis',
      description: 'Designed and simulated 1-Phase & 3-Phase induction motors using ANSYS Maxwell for efficiency optimization through advanced material selection and parameter analysis.',
      technologies: ['ANSYS Maxwell', 'CAD', 'Electrical Machines', 'Simulation'],
      impact: 'Optimized motor efficiency by analyzing electromagnetic field behavior'
    },
    {
      title: 'Real-Time Soldier Health and GPS Tracking System',
      category: 'IoT & Tracking',
      description: 'Implemented an advanced tracking and health monitoring solution for soldiers in the field, combining real-time GPS positioning with vital sign monitoring.',
      technologies: ['IoT', 'GPS', 'Health Monitoring', 'Real-time Systems'],
      impact: 'Improved field safety and operational efficiency for military personnel'
    },
    {
      title: 'Smart Switchboard Automation',
      category: 'Home Automation',
      description: 'Developed an innovative solution for centralizing appliance control, streamlining home automation with intelligent switchboard capabilities.',
      technologies: ['Automation', 'Control Systems', 'Electronics'],
      impact: 'Enhanced convenience and centralized control of home appliances'
    },
    {
      title: 'Campus Light Intelligent System',
      category: 'Energy Management',
      description: 'Modelled an intelligent lighting system that optimizes campus energy usage through automated control and sensor-based activation.',
      technologies: ['Automation', 'Energy Optimization', 'Control Systems'],
      impact: 'Reduced energy consumption while maintaining campus safety'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Innovative solutions and technical implementations</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-header">
                <span className="project-category">{project.category}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-impact">
                <strong>Impact:</strong> {project.impact}
              </div>

              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-footer">
                <p className="coming-soon">More details coming soon...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
