// src/components/Achievements.js
import React from 'react';

function Achievements() {
  const achievements = [
    {
      title: '1st Prize',
      event:
        'College-Level 36-Hour Hackathon at Kongu Engineering College for the project SAP Point Calculator.',
    },
    {
      title: 'Finalist',
      event:
        'State-Level Hackathon by GUVI and TNCPL for the project E-Learning Path Generator.',
    },
    {
      title: '3rd Prize',
      event:
        'College-Level Web Designing Contest at Kongu Engineering College.',
    },
    {
      title: '3rd Prize',
      event:
        'Idea Presentation at the Department-Level Ideathon at Kongu Engineering College for the project Tour Eaze (a travel and tourism-based site).',
    },
  ];

  return (
    <section id="achievements" className="section">
      <div className="section-content">
        <h2>Achievements</h2>
        <ul className="achievements-list">
          {achievements.map((item, idx) => (
            <li key={idx}>
              <strong>{item.title}</strong> in the {item.event}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Achievements;
