import './Hero.css';
import profile from "../assets/me.jpeg"

export default function Hero() {
  return (
    <section className="card hero" id="hero">
      {/* Subtle background orb */}
      <div className="hero-bg-orb" aria-hidden="true" />

      <div className="hero-content">
        {/* Profile Image */}
        <div className="hero-image-wrapper">
          <div className="hero-image-ring">
            <img
              src={profile}
              alt="Marwa Selim's profile"
              className="hero-image"
              loading="eager"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="hero-text">
          <h1 className="hero-greeting">
            Hi, I'm <span className="hero-name">Marwa Selim</span>
          </h1>
          <p className="hero-title accent-text">Front-End Developer</p>
          <p className="hero-description">
            Computer Science student specializing in React, TypeScript, and high-tech minimalist UI design. I build smart, performance-driven web applications.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <a href="#portfolio" className="btn btn-primary" id="hero-view-work">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            View My Work
          </a>
          <a href="/Software_Engineer_Internship_CV.pdf" download="Software_Engineer_Internship_CV.pdf" className="btn btn-secondary" id="hero-download-cv">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
