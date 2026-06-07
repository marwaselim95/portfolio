import { useEffect, useRef, useState } from 'react';
import './Languages.css';

const defaultLanguages = [
  { name: 'Arabic', level: 'Native', percentage: 100 },
  { name: 'English', level: 'Fluent', percentage: 85 },
];

function LanguageRing({ name, level, percentage, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 250);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * (visible ? percentage : 0)) / 100;

  return (
    <div className={`language-ring-wrapper ${visible ? 'language-ring--visible' : ''}`} ref={ref}>
      <div className="language-ring">
        <svg width="140" height="140" viewBox="0 0 140 140" className="language-ring-svg">
          {/* Background ring */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="rgba(0, 212, 255, 0.06)"
            strokeWidth="4"
          />
          {/* Progress ring */}
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 70 70)"
            className="language-progress-ring"
          />
        </svg>

        {/* Center text */}
        <div className="language-center">
          <span className="language-name">{name}</span>
          <span className="language-level">{level}</span>
        </div>
      </div>
    </div>
  );
}

export default function Languages({ languages = defaultLanguages }) {
  return (
    <section className="card languages" id="languages">
      <h2 className="section-heading">Languages</h2>

      <div className="languages-grid">
        {languages.map((lang, index) => (
          <LanguageRing
            key={lang.name}
            name={lang.name}
            level={lang.level}
            percentage={lang.percentage}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
