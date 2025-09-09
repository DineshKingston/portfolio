import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section-unique">
      {/* Animated Background Elements */}
      <div className="contact-bg-container">
        <div className="contact-bg-gradient"></div>
        <div className="contact-bg-pattern"></div>
        <div className="contact-floating-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
          <div className="floating-shape shape-5"></div>
        </div>
        <div className="contact-grid-pattern"></div>
      </div>

      <div className="container-custom">
        <div className="contact-header-unique">
          <div className="contact-badge-unique">
            <div className="badge-glow"></div>
            <svg className="badge-icon" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>Let's Connect</span>
          </div>
          
          <h2 className="contact-title-unique">
            Ready to Create <br />
            <span className="title-gradient">Something Amazing?</span>
          </h2>
          
          <p className="contact-description-unique">
            Whether you have a project in mind, want to collaborate, or just want to say hello, 
            I'm always excited to connect with fellow developers and innovators.
          </p>
        </div>

        <div className="contact-content-unique">
          {/* Contact Info Cards */}
          <div className="contact-info-unique">
            {/* Email Card */}
            <div className="info-card-unique email-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-header-mobile">
                  <div className="card-icon">
                    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="card-title-mobile">Email Me</h3>
                </div>
                <div className="card-details">
                  <p className="card-info">dineshkingston94@gmail.com</p>
                  <a href="mailto:dineshkingston94@gmail.com" className="card-link">
                    <span>Send Email</span>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="info-card-unique location-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="card-header-mobile">
                  <div className="card-icon">
                    <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="card-title-mobile">Location</h3>
                </div>
                <div className="card-details">
                  <p className="card-info">Tirunelveli, Tamil Nadu</p>
                  <span className="card-link inactive">
                    <span>India</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Grid */}
            <div className="social-grid-unique">
              <a href="https://github.com/DineshKingston" className="social-item-unique github">
                <div className="social-glow"></div>
                <div className="social-content">
                  <div className="social-icon">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <span className="social-text">GitHub</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/dinesh-kingston-s-628031259/" className="social-item-unique linkedin">
                <div className="social-glow"></div>
                <div className="social-content">
                  <div className="social-icon">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="social-text">LinkedIn</span>
                </div>
              </a>

              <a href="https://www.instagram.com/_b_lank.heart_dinesh_21/" className="social-item-unique instagram">
                <div className="social-glow"></div>
                <div className="social-content">
                  <div className="social-icon">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span className="social-text">Instagram</span>
                </div>
              </a>

              <a href="https://www.facebook.com/profile.php?id=DineshKingston" className="social-item-unique facebook">
                <div className="social-glow"></div>
                <div className="social-content">
                  <div className="social-icon">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="social-text">Facebook</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-unique">
            <div className="form-container-unique">
              <div className="form-glow"></div>
              <div className="form-header">
                <h3>Send Message</h3>
                <p>Drop me a line and let's start something great together</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form-modern">
                <div className="form-group-unique">
                  <label htmlFor="name">Full Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                    <div className="input-border"></div>
                  </div>
                </div>

                <div className="form-group-unique">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                    <div className="input-border"></div>
                  </div>
                </div>

                <div className="form-group-unique">
                  <label htmlFor="message">Message</label>
                  <div className="input-wrapper">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project, ideas, or just say hello..."
                    ></textarea>
                    <div className="input-border"></div>
                  </div>
                </div>

                <button type="submit" className="submit-btn-unique">
                  <span className="btn-text">Send Message</span>
                  <span className="btn-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                  <div className="btn-glow"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
