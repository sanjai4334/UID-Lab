// src/components/Skills.js
import React from 'react';

function Skills() {
  const skills = [
    [
      { icon: 'fab fa-python', name: 'Python' },
      { icon: 'fab fa-java', name: 'Java' },
      { icon: 'fas fa-code', name: 'C' },
      { icon: 'fab fa-js', name: 'JavaScript' },
    ],
    [
      { icon: 'fab fa-html5', name: 'HTML' },
      { icon: 'fab fa-css3-alt', name: 'CSS' },
      { icon: 'fab fa-react', name: 'React' },
      { icon: 'fab fa-node-js', name: 'Node.js' },
    ],
    [
      { icon: 'fas fa-server', name: 'Express' },
      { icon: 'fas fa-database', name: 'MongoDB' },
      { icon: 'fas fa-database', name: 'SQL' },
      { icon: 'fab fa-git-alt', name: 'Git' },
    ],
  ];

  return (
    <section id="skills" className="section">
      <div className="section-content">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((column, idx) => (
            <div className="skills-column" key={idx}>
              {column.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
