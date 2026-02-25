import React, { useState } from 'react';
import Reveal from '../components/Reveal';

// Contact page with contact form and map placeholder
function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Frontend-only demo: show a confirmation message
    setSubmitted(true);
  }

  return (
    <section className="page">
      <div className="container page-header">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1>Get in Touch</h1>
          <p className="page-intro">
            Whether you are a professor, recruiter, or collaborator, feel free
            to reach out regarding research opportunities, analytical roles, or
            academic collaborations.
          </p>
        </Reveal>
      </div>

      <div className="container contact-layout">
        <Reveal className="contact-details">
          <h2>Contact Information</h2>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Email</span>
              <a href="mailto:jdepan18@gmail.com">jdepan18@gmail.com</a>
            </li>
            <li>
              <span className="contact-label">Phone</span>
              <a href="tel:+919361159775">+91 9361159775</a>
            </li>
            <li>
              <span className="contact-label">LinkedIn</span>
              <a
                href="https://linkedin.com/in/jdeepan18"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/jdeepan18
              </a>
            </li>
            <li>
              <span className="contact-label">Location</span>
              <span>Tamil Nadu, India</span>
            </li>
          </ul>
        </Reveal>

        <Reveal className="contact-form-wrapper">
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="form-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-field">
              <span>Message</span>
              <textarea
                name="message"
                rows="4"
                placeholder="How can Deepan help you?"
                value={formState.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
            {submitted && (
              <p className="form-success">
                Thank you for your message. This demo form does not yet send
                emails, but your details have been captured in this session.
              </p>
            )}
          </form>
        </Reveal>
      </div>

      <div className="container">
        <Reveal className="map-section">
          <h2>Map (Placeholder)</h2>
          <p className="map-description">
            This placeholder can be replaced with an embedded Google Map showing
            Tamil Nadu, India or a specific city of preference.
          </p>
          <div className="map-placeholder" aria-label="Google Map placeholder">
            <span>Google Map Placeholder</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
