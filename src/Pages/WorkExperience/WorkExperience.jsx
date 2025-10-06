import React from 'react';
import './WorkExperience.css';
import geLogo from '../../assets/ge_logo.png';
import purdueLogo from '../../assets/purdue_logo.png';
import costcoLogo from '../../assets/costco_logo.png';
import chipotleLogo from '../../assets/chipotle_logo.png';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'GE Aerospace',
      title: 'Supply Chain and Manufacturing Intern - Assembly and Test',
      date: 'May 2025 – Aug 2025',
      location: 'Evendale, Ohio',
      description: `As a Supply Chain and Manufacturing Intern at GE Aerospace, I designed and prototyped ergonomic kit carts for engine mechanics as part of a new kitting initiative. I also developed a Python tool to analyze excess hardware inventory and export cost and usage data to Excel. Additionally, I facilitated the return of excess and non-conforming engine components, improving efficiency and reducing waste.`,
      logo: geLogo,
      skills: ['Python', 'Excel', 'Lean Manufacturing', 'Inventory Analysis', 'CAD', 'Continous Improvement', 'Supply Chain', 'CAS Inventory Software'],
    },
    {
      company: 'GE Aerospace',
      title: 'Inspection Engineering Intern',
      date: 'May 2024 – Aug 2024',
      location: 'Evendale, Ohio',
      description: `As an Inspection Engineering Intern at GE Aerospace, I developed a Python module using the Avizo API to automate ASTM E1695, a standard algorithm for CT performance testing. The module quantifies CT system resolution and contrast limits, essential metrics for evaluating the detectability of indications. It has since been integrated into production software and is now deployed for research scans.`,
      logo: geLogo,
      skills: ['Python', 'Image Processing', 'CT Imagining', 'Testing', 'Inspection', 'Data Analytics', 'Avizo for Industrial Inspection'],
    },
    {
      company: 'Costco Wholesale',
      title: 'Front End Assistant - Seasonal',
      date: 'May 2023 – Jan 2025',
      location: 'Cincinnati, Ohio',
      description: `Summer/winter seasonal position where I assisted cashiers, ensured carts were readily available for members, and organized merchandise in the warehouse.`,
      logo: costcoLogo,
      skills: ['Communication', 'Customer service', 'Teamwork'],
    },
    {
      company: 'Chipotle Mexican Grill',
      title: 'Crew Member',
      date: 'May 2022 – Aug 2022',
      location: 'Cincinnati, Ohio',
      description: `Summer position where I was responsible for food preparation and serving customers.`,
      logo: chipotleLogo,
      skills: ['Communication', 'Customer service'],
    },
  ];

  return (
    <div className="work-page">
      <div className="work-title-box">
        <h1 className="work-title">Work Experience</h1>
      </div>
      <div className="work-container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`work-box ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
          >
            <div className="work-header">
              <h2 className="work-company">{exp.company}</h2>
              <img src={exp.logo} alt={`${exp.company} logo`} className="work-logo" />
            </div>
            <h3 className="work-role">{exp.title}</h3>
            <p className="work-date">{exp.date}</p>
            <p className="work-location">{exp.location}</p>
            <p className="work-desc">{exp.description}</p>
            <div className="skills-container">
              {exp.skills.map((skill, i) => (
                <span key={i} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
