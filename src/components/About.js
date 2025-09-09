import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding about-section gradient-section-bg">
      <div className="about-bg-elements">
        <div className="about-bg-circle-1"></div>
        <div className="about-bg-circle-2"></div>
      </div>

      <div className="container-custom">
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-icon">👨‍💻</span>
            <span>About Me</span>
          </div>
          <h2 className="section-title">
            Know More <span className="text-gradient-purple">About Me</span>
          </h2>
          <p className="section-description">
            A passionate Computer Science student with expertise in full-stack development 
            and a keen interest in emerging technologies.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <div className="about-card-icon gradient-purple-pink">
              <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="about-card-title">Full Stack Development</h3>
            <p className="about-card-text">
              Proficient in React.js, Spring Boot, and modern web technologies 
              with hands-on project experience.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon" style={{background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'}}>
              <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="about-card-title">Problem Solving</h3>
            <p className="about-card-text">
              Strong analytical skills with experience in algorithm design 
              and real-world problem-solving applications.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon" style={{background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'}}>
              <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="about-card-title">Innovation</h3>
            <p className="about-card-text">
              Participated in hackathons and project expos, always eager to 
              explore new technologies and frameworks.
            </p>
          </div>
        </div>

        <div className="about-journey">
          <h3 className="about-journey-title">My Journey</h3>
          <p className="about-journey-text">
            Currently pursuing B.Tech in Computer Science and Business System at Francis Xavier Engineering College. 
            I have completed internships, participated in various competitions, and built several projects 
            that showcase my technical skills and passion for development.
          </p>
          <div className="skill-tags">
            <span className="skill-tag">Java Development</span>
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Spring Boot</span>
            <span className="skill-tag">AI Integration</span>
            <span className="skill-tag">Database Design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
