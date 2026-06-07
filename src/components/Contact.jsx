import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const EMAILJS_SERVICE_ID = "service_1n2mmkz";
const EMAILJS_TEMPLATE_ID = "template_1xdbf9i";
const EMAILJS_TEMPLATE_ID2 = "template_gz09c1n";
const EMAILJS_PUBLIC_KEY = "XJlNjsE-E7nHpygnG";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  }); 
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMsg('');
    setSubmitted(false);

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        title: formData.message,
      },
      EMAILJS_PUBLIC_KEY
    )
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID2,
      {
        name: formData.name,
        email: formData.email,
        title: formData.message,
      },
      EMAILJS_PUBLIC_KEY
    )
      .then((response) => {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setErrorMsg("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="card contact-card" id="contact">
      <h2 className="section-heading">Get In Touch</h2>

      <div className="contact-glass">
        <div className="contact-layout">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <span className="contact-detail-label">Location</span>
                <span className="contact-detail-value">Beheira, Egypt</span>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <span className="contact-detail-label">Email</span>
                <span className="contact-detail-value">selimmarwa01@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
            <div className="contact-form-group">
              <label htmlFor="contact-name" className="contact-label">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                className="contact-input"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-email" className="contact-label">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                className="contact-input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-message" className="contact-label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="contact-input contact-textarea"
                placeholder="Your message..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit-btn"
              id="contact-submit-btn"
              disabled={isSending}
            >
              {isSending ? (
                <>
                  <svg className="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="2" x2="12" y2="6"/>
                    <line x1="12" y1="18" x2="12" y2="22"/>
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
                    <line x1="2" y1="12" x2="6" y2="12"/>
                    <line x1="18" y1="12" x2="22" y2="12"/>
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
                  </svg>
                  Sending...
                </>
              ) : submitted ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Sent
                </>
              ) : (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Message
                </>
              )}
            </button>
            {submitted && <div className="contact-status success">Message Sent Successfully!</div>}
            {errorMsg && <div className="contact-status error">{errorMsg}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
