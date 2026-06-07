import { useEffect, useRef, useState } from 'react';
import './Skills.css';
import roboticHand from '../assets/hand.png';

const defaultSkills = [
  { name: 'React', percentage: 90 },
  { name: 'TypeScript', percentage: 85 },
  { name: 'JavaScript', percentage: 90 },
  { name: 'Tailwind CSS', percentage: 85 },
];

function ProgressBar({ name, percentage, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div className="skill-item" ref={barRef}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage accent-text">{percentage}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill ${visible ? 'skill-bar-fill--animate' : ''}`}
          style={{ '--target-width': `${percentage}%` }}
        >
          <div className="skill-bar-glow" />
        </div>
      </div>
    </div>
  );
}

export default function Skills({ skills = defaultSkills }) {
  return (
    <section className="card skills" id="skills">
      <h2 className="section-heading">My Skills</h2>

      <div className="skills-layout">
        {/* Left: Holographic visual */}
        <div className="skills-visual">
          <div className="skills-hologram">
            <img
              src={roboticHand
                
              }
              alt="Holographic robotic arm"
              className="skills-hand-image"
              loading="lazy"
            />
            {/* Floating tech icons */}
            <div className="skills-float-icon skills-float-icon--1" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10.5" stroke="var(--accent)" strokeWidth="1" />
                <circle cx="12" cy="12" r="2" fill="var(--accent)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="var(--accent)" strokeWidth="0.8" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="var(--accent)" strokeWidth="0.8" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="var(--accent)" strokeWidth="0.8" transform="rotate(120 12 12)" />
              </svg>
            </div>
            <div className="skills-float-icon skills-float-icon--2" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="skills-float-icon skills-float-icon--3" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.2">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right: Animated Progress Bars */}
        <div className="skills-data">
          <p className="skills-description">
            I'm a passionate front-end developer specializing in modern JavaScript frameworks and performance-focused architecture. I build interfaces that are as clean in code as they are on screen.
          </p>
          <div className="skills-bars">
            {skills.map((skill, i) => (
              <ProgressBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={i * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
