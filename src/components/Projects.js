import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Document Read AI",
      description: "An AI-powered document processing application that can read, analyze, and summarize various document formats including PDF, DOCX, and TXT files using advanced machine learning algorithms.",
      technologies: ["React.js", "Spring Boot", "AI/ML", "Gemini API", "AWS Lambda"],
      features: [
        "Multi-format document support",
        "AI-powered text analysis", 
        "Real-time processing",
        "User-friendly interface",
        "Cloud deployment"
      ],
      icon: (
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      github: "https://github.com/DineshKingston/document-read-ai",
      demo: "#"
    },
    {
      title: "Online Fees Payment System",
      description: "Comprehensive fee management system with secure payment gateway integration, admin dashboard, and student portal for seamless transactions using MERN stack.",
      technologies: ["MERN Stack", "MySQL", "Razorpay", "JWT Authentication", "Node.js"],
      features: [
        "Secure payment processing",
        "Admin & student dashboards",
        "Fee structure management",
        "Transaction history",
        "Role-based access control"
      ],
      icon: (
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      github: "https://github.com/DineshKingston/fees-payment-system",
      demo: "#"
    },
    {
      title: "Object Detection System",
      description: "Real-time object detection system using Raspberry Pi and OpenCV to identify humans, bottles, and specific objects with integrated deep learning models.",
      technologies: ["Python", "OpenCV", "Raspberry Pi", "YOLO", "TensorFlow"],
      features: [
        "Real-time object detection",
        "Low-power optimization",
        "Multiple object recognition",
        "Hardware integration",
        "Computer vision algorithms"
      ],
      icon: (
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
      github: "https://github.com/DineshKingston/object-detection",
      demo: "#"
    },
    {
      title: "Voice Recognition System",
      description: "Web-based voice recognition system with real-time speech-to-text functionality and interactive UI with visual feedback and animations.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Speech API", "Audio Processing"],
      features: [
        "Real-time speech recognition",
        "Interactive UI animations",
        "Voice command processing",
        "Browser compatibility",
        "Visual feedback system"
      ],
      icon: (
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      github: "https://github.com/DineshKingston/voice-recognition",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding projects-section">
      <div className="about-bg-elements">
        <div className="about-bg-circle-1"></div>
        <div className="about-bg-circle-2"></div>
      </div>

      <div className="container-custom">
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-icon">🚀</span>
            <span>Featured Projects</span>
          </div>
          <h2 className="section-title">
            My <span className="text-gradient-purple">Projects</span>
          </h2>
          <p className="section-description">
            Some of my recent work and personal projects that showcase my technical skills
          </p>
        </div>

        <div className="projects-cards">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-header" style={{background: project.gradient}}>
                <div className="project-header-bg"></div>
                <div className="project-header-bg-2"></div>
                
                <div className="project-header-content">
                  <div className="project-header-top">
                    <div className="project-icon">
                      {project.icon}
                    </div>
                    <div className="project-links">
                      <a href={project.github} className="project-link">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href={project.demo} className="project-link">
                        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </div>

              <div className="project-content">
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4 className="project-features-title">Key Features:</h4>
                  <ul className="project-features-list">
                    {project.features.slice(0, 3).map((feature, featureIdx) => (
                      <li key={featureIdx} className="project-feature">
                        <span className="project-feature-dot"></span>
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="project-feature" style={{color: '#8B5CF6', fontWeight: '500'}}>
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="project-technologies">
                  <h4 className="project-technologies-title">Technologies:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <a href={project.github} className="project-btn project-btn-primary">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="project-btn project-btn-secondary" style={{background: project.gradient}}>
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <a href="https://github.com/DineshKingston" className="projects-cta-btn">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View More Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
