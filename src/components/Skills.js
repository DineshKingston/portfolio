import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState({});
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
      skills: [
        { name: "Java", level: 85, color: "linear-gradient(90deg, #f97316 0%, #ea580c 100%)" },
        { name: "Python", level: 80, color: "linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)" },
        { name: "C", level: 75, color: "linear-gradient(90deg, #6b7280 0%, #374151 100%)" },
        { name: "JavaScript", level: 90, color: "linear-gradient(90deg, #eab308 0%, #ca8a04 100%)" },
        { name: "SQL", level: 80, color: "linear-gradient(90deg, #10b981 0%, #059669 100%)" }
      ]
    },
    {
      title: "Web Technologies",
      icon: "🌐",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      skills: [
        { name: "HTML", level: 95, color: "linear-gradient(90deg, #dc2626 0%, #b91c1c 100%)" },
        { name: "CSS", level: 90, color: "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)" },
        { name: "React.js", level: 85, color: "linear-gradient(90deg, #06b6d4 0%, #0891b2 100%)" },
        { name: "Spring Boot", level: 80, color: "linear-gradient(90deg, #16a34a 0%, #15803d 100%)" }
      ]
    },
    {
      title: "Databases & Tools",
      icon: "🛠️",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      skills: [
        { name: "MySQL", level: 85, color: "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)" },
        { name: "MongoDB", level: 75, color: "linear-gradient(90deg, #16a34a 0%, #15803d 100%)" },
        { name: "Git & GitHub", level: 80, color: "linear-gradient(90deg, #8b5cf6 0%, #7c3aed 100%)" },
        { name: "IntelliJ IDEA", level: 85, color: "linear-gradient(90deg, #4f46e5 0%, #4338ca 100%)" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryIndex = parseInt(entry.target.dataset.categoryIndex);
            setTimeout(() => {
              setVisibleSkills(prev => ({ ...prev, [categoryIndex]: true }));
            }, categoryIndex * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillElements = skillsRef.current?.querySelectorAll('[data-category-index]');
    skillElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding skills-section gradient-section-bg">
      <div className="about-bg-elements">
        <div className="about-bg-circle-1"></div>
        <div className="about-bg-circle-2"></div>
      </div>

      <div className="container-custom" ref={skillsRef}>
        <div className="section-header">
          <div className="section-badge">
            <span className="section-badge-icon">⚡</span>
            <span>Technical Skills</span>
          </div>
          <h2 className="section-title">
            My <span className="text-gradient-purple">Expertise</span>
          </h2>
          <p className="section-description">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-cards">
          {skillCategories.map((category, categoryIdx) => (
            <div 
              key={categoryIdx} 
              data-category-index={categoryIdx}
              className="skills-card"
            >
              <div className="skills-card-header">
                <div className="skills-card-icon" style={{background: category.gradient}}>
                  <span style={{fontSize: '2rem'}}>{category.icon}</span>
                </div>
                <h3 className="skills-card-title">{category.title}</h3>
              </div>

              <ul className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar"
                        style={{ 
                          width: visibleSkills[categoryIdx] ? `${skill.level}%` : '0%',
                          background: skill.color,
                          transitionDelay: `${skillIdx * 100}ms`
                        }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="skills-additional">
          <h3 className="skills-additional-title">Additional Skills & Interests</h3>
          <div className="skill-tags">
            <span className="skill-tag">Problem Solving</span>
            <span className="skill-tag">Team Collaboration</span>
            <span className="skill-tag">Continuous Learning</span>
            <span className="skill-tag">Innovation</span>
            <span className="skill-tag">AI Integration</span>
            <span className="skill-tag">Cloud Computing</span>
            <span className="skill-tag">Mobile Development</span>
            <span className="skill-tag">UI/UX Design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
