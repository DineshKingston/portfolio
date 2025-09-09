import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Business System",
      institution: "Francis Xavier Engineering College",
      duration: "2022 - 2026",
      status: "Pursuing",
      location: "Tirunelveli",
      description: "Comprehensive curriculum covering software development, algorithms, databases, and business systems integration."
    },
    {
      degree: "Higher Secondary",
      field: "Science Stream",
      institution: "St. Antony's Matriculation Higher Secondary School",
      duration: "2020 - 2022",
      status: "Completed",
      location: "Tirunelveli",
      description: "Strong foundation in Mathematics, Physics, and Chemistry with focus on analytical thinking."
    },
    {
      degree: "SSLC",
      field: "Secondary Education",
      institution: "Tilak Vidyalaya Higher Secondary School",
      duration: "2016 - 2020",
      status: "Completed",
      location: "Tirunelveli",
      description: "Well-rounded education with emphasis on core subjects and extracurricular activities."
    }
  ];

  const achievements = [
    {
      title: "NPTEL Certification",
      description: "Completed online courses in programming and data structures",
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      color: "#2563eb"
    },
    {
      title: "Django Internship",
      description: "Completed internship at IPCS Global, Chennai - Built bike ride project",
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      color: "#16a34a"
    },
    {
      title: "Project Expo Participation",
      description: "Participated in The Mega Project Expo showcasing technical projects",
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: "#f97316"
    },
    {
      title: "Hackathon Experience",
      description: "Active participation in PCI Innovism and various hackathon events",
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "#8b5cf6"
    }
  ];

  return (
    <section id="education" className="section-padding education-section gradient-section-bg">
      <div className="about-bg-elements">
        <div className="about-bg-circle-1"></div>
        <div className="about-bg-circle-2"></div>
      </div>

      <div className="container-custom">
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-icon">🎓</span>
            <span>Education & Achievements</span>
          </div>
          <h2 className="section-title">
            My <span className="text-gradient-purple">Journey</span>
          </h2>
          <p className="section-description">
            My academic background and notable accomplishments that shaped my career
          </p>
        </div>

        <div className="education-content">
          <div className="education-column">
            <div className="education-column-title">
              <div className="education-column-icon gradient-purple-pink">
                <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="education-column-text">Education</h3>
            </div>
            
            {education.map((edu, idx) => (
              <div key={idx} className="education-card">
                <div className="education-card-decoration"></div>
                
                <div className="education-card-content">
                  <div className="education-card-header">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <span className={`education-status ${edu.status.toLowerCase()}`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="education-field">{edu.field}</p>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-description">{edu.description}</p>
                  
                  <div className="education-meta">
                    <div className="education-meta-item">
                      <svg className="education-meta-icon" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1M8 7h8m-8 0a2 2 0 00-2 2v6a2 2 0 002 2v1a2 2 0 002 2h4a2 2 0 002-2v-1a2 2 0 002-2V9a2 2 0 00-2-2m-8 0V7" />
                      </svg>
                      <span>{edu.duration}</span>
                    </div>
                    <div className="education-meta-item">
                      <svg className="education-meta-icon" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="education-column">
            <div className="education-column-title">
              <div className="education-column-icon" style={{background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'}}>
                <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="education-column-text">Achievements</h3>
            </div>
            
            <div className="education-extras">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="achievement-card">
                  <div className="achievement-content">
                    <div className="achievement-icon">
                      <div style={{color: achievement.color}}>
                        {achievement.icon}
                      </div>
                    </div>
                    <div className="achievement-text">
                      <h4 className="achievement-title">{achievement.title}</h4>
                      <p className="achievement-description">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="education-extra-card languages">
                <h4 className="education-extra-title">Languages</h4>
                <div className="language-tags">
                  <span className="language-tag">Tamil (Native)</span>
                  <span className="language-tag">English (Fluent)</span>
                </div>
              </div>

              <div className="education-extra-card location">
                <h4 className="education-extra-title">Location</h4>
                <div className="location-info">
                  <svg className="location-icon" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="location-text">Tirunelveli, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
