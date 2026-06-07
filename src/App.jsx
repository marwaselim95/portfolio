import { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Languages from './components/Languages';
import Contact from './components/Contact';
import './App.css';

const sectionIds = ['hero', 'skills', 'education', 'portfolio', 'languages', 'contact'];

/* Neural network background — faint connecting dots */
function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;
    let nodes = [];
    const NODE_COUNT = 60;
    const CONNECTION_DIST = 160;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.12;
            ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx.fillStyle = 'rgba(0, 212, 255, 0.25)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="neural-bg" />;
}

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.35, rootMargin: '-60px 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <NeuralBackground />
      <div className="vibrant-bg" aria-hidden="true">
        <div className="vibrant-orb vibrant-orb-1"></div>
        <div className="vibrant-orb vibrant-orb-2"></div>
        <div className="vibrant-orb vibrant-orb-3"></div>
        <div className="vibrant-orb vibrant-orb-4"></div>
      </div>
      <div className="app-container">
        <Sidebar activeSection={activeSection} />
        <main className="main-content">
          <Hero />
          <Skills />
          <Education />
          <Portfolio />
          <Languages />
          <Contact />

          {/* Footer */}
          <footer className="footer" id="footer">
            <p className="footer-text">
              © 2025 <span className="accent-text">Marwa Selim</span>. Engineered with precision.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
