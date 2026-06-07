import { useState } from 'react';
import './Sidebar.css';

const navItems = [
  { id: 'hero', icon: 'home', label: 'Home' },
  { id: 'skills', icon: 'skills', label: 'Skills' },
  { id: 'education', icon: 'education', label: 'Education' },
  { id: 'portfolio', icon: 'portfolio', label: 'Projects' },
  { id: 'languages', icon: 'languages', label: 'Languages' },
  { id: 'contact', icon: 'contact', label: 'Contact' },
];

/* Inline SVG icons */
const icons = {
  home: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  skills: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
      <line x1="14" y1="4" x2="10" y2="20"/>
    </svg>
  ),
  education: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/>
    </svg>
  ),
  portfolio: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>
  ),
  languages: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  ),
  contact: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
};

export default function Sidebar({ activeSection = 'hero' }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className={`sidebar-hamburger ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
        id="sidebar-toggle"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />
      )}

      <nav className={`sidebar ${mobileOpen ? 'sidebar--open' : ''}`} id="sidebar-nav" aria-label="Main navigation">
        {/* Logo / Monogram */}
        <div className="sidebar-logo">
          <span className="sidebar-logo-text">M</span>
        </div>

        {/* Navigation items */}
        <ul className="sidebar-nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="sidebar-nav-item">
              <button
                className={`sidebar-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNav(item.id)}
                aria-label={item.label}
                id={`nav-${item.id}`}
              >
                <span className="sidebar-icon">{icons[item.icon]}</span>
                <span className="sidebar-tooltip">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Bottom decoration */}
        <div className="sidebar-footer">
          <div className="sidebar-dot" />
        </div>
      </nav>
    </>
  );
}
