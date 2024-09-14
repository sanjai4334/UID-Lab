// src/components/Projects.js
import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'SAP Point Calculator',
      image: '/src/assets/sap-point-calculator.png',
      description:
        'A web application that allows students and staff to manage student activity points. This project won 1st prize in a college-level 36-hour hackathon.',
      technologies: 'HTML, CSS, Bootstrap, JavaScript, Node.js, Express',
      link: 'https://github.com/sanjai4334/SAP-Point-Calculator-Student-Portal',
    },
    {
      title: 'Facts App',
      image: '/src/assets/facts-app.png',
      description:
        'A web application that provides facts about different engineering fields. This project was done as part of a department-level hackathon.',
      technologies: 'Python, ReactJS',
      link: 'https://github.com/sanjai4334/FactsApp',
    },
    {
      title: 'E-Learning Path Generator',
      image: null,
      description:
        'A machine learning-based application that provides users with a learning path for any subject they want to learn. This project reached the finals of a state-level hackathon.',
      technologies: 'Python, Machine Learning',
      link: null,
    },
    {
      title: 'Data Download Duplication Alert System',
      image: null,
      description:
        'An application that alerts users if they try to download a file that already exists in the system or on the network. Submitted for the Smart India Hackathon.',
      technologies: 'Python, JavaScript',
      link: null,
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="section-content">
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              {project.image && <img src={project.image} alt={project.title} />}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies Used:</strong> {project.technologies}
              </p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
