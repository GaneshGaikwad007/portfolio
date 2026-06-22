import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:gaikwadganeshkisan@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">I'm interested in opportunities and collaborations</p>

        <div className="contact-content">
          <div className="contact-info slide-in-left">
            <h3>Get In Touch</h3>
            <p>Feel free to reach out to me through any of the following channels. I'm always open to discussing new projects, ideas, or opportunities to be part of your vision.</p>

            <div className="contact-items">
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:gaikwadganeshkisan@gmail.com">gaikwadganeshkisan@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+917756883783">+91 7756883783</a>
                </div>
              </div>

              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Suregaon, Maharashtra, India</p>
                </div>
              </div>

              <div className="contact-item">
                <FiLinkedin className="contact-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/ganesh-gaikwad" target="_blank" rel="noopener noreferrer">
                    Ganesh-Gaikwad
                  </a>
                </div>
              </div>
            </div>

            <div className="languages">
              <h4>Languages</h4>
              <div className="language-tags">
                <span>English</span>
                <span>Marathi</span>
                <span>Hindi</span>
              </div>
            </div>
          </div>

          <form className="contact-form slide-in-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
