import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Ganesh Kisan Gaikwad</span>
            </h1>
            <p className="hero-subtitle">
              Electrical Engineering Professional | Industrial Automation Enthusiast | EV Domain Explorer
            </p>
            <p className="hero-description">
              B-Tech in Electrical Engineering with expertise in Industrial Automation, Power Systems, and innovative solutions. 
              Passionate about creating intelligent systems and pushing the boundaries of technology.
            </p>
            <div className="hero-buttons">
              <ScrollLink to="contact" smooth duration={500} className="btn btn-primary">
                Get In Touch <FiArrowRight />
              </ScrollLink>
              <a href="#projects" className="btn btn-secondary">
                View My Work
              </a>
            </div>
          </div>
          <div className="hero-visual float">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
