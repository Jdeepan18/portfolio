import React from 'react';
import Reveal from '../components/Reveal';

// Structured skill categories and badges
const skillCategories = [
  {
    title: 'Data & Quantitative Analysis',
    description:
      'End-to-end analytical workflows from data collection to insight generation.',
    skills: [
      'Data Analysis & Visualization',
      'Statistical Modeling',
      'Portfolio Analysis',
      'Investment Risk Analysis',
      'Numerical Methods'
    ]
  },
  {
    title: 'Financial Analysis & Modeling',
    description:
      'Bridging physics-trained quantitative thinking with modern finance.',
    skills: [
      'Financial Analysis',
      'DCF Modeling',
      'Investment Banking Concepts',
      'Asset Management',
      'Internal Auditing Fundamentals'
    ]
  },
  {
    title: 'Programming & Scripting',
    description:
      'Scientific computing, research tooling, and analytical automation.',
    skills: ['Python', 'R Labs', 'SQL', 'MATLAB']
  },
  {
    title: 'Analytics & Productivity Tools',
    description:
      'Decision support dashboards, reporting, and advanced spreadsheet work.',
    skills: [
      'Tableau',
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Data Cleaning',
      'Reporting Automation'
    ]
  }
];

// Skills page with interactive cards
function Skills() {
  return (
    <section className="page">
      <div className="container page-header">
        <Reveal>
          <p className="eyebrow">Skills</p>
          <h1>Technical & Professional Skillset</h1>
          <p className="page-intro">
            A combination of physics-driven analytical thinking, scientific
            programming, and financial modeling skills, applied to research and
            industry-facing problems.
          </p>
        </Reveal>
      </div>

      <div className="container skills-grid">
        {skillCategories.map((category) => (
          <Reveal key={category.title} className="skill-card">
            <h2>{category.title}</h2>
            <p className="skill-description">{category.description}</p>
            <div className="skill-badges">
              {category.skills.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;