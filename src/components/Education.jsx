import './Education.css';

export default function Education() {
  return (
    <section className="card education" id="education">
      <h2 className="section-heading">Education</h2>

      <div className="education-timeline">
        <div className="education-item">
          {/* Timeline line + dot */}
          <div className="education-timeline-track">
            <div className="education-dot">
              <div className="education-dot-inner" />
            </div>
          </div>

          {/* Content */}
          <div className="education-content">
            <h3 className="education-degree">B.S. in Computer Science</h3>
            <p className="education-institution">
              Damanhour University, Faculty of Science | Expected 2027 | CGPA: 3.6
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
