	import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

// Home / landing page with hero and overview tiles
function Home() {
  return (
    <section className="page home-page">
      <div className="container home-grid">
        <Reveal className="home-hero">
          <p className="eyebrow">Academic & Professional Portfolio</p>
          <h1>
            <span className="highlight-text">Deepan J</span>
          </h1>
          <p className="hero-subtitle">
            Physics graduate, researcher, and data/financial analyst bridging
            scientific rigor with quantitative finance, data-driven decision
            making, and advanced imaging research.
          </p>
          <div className="hero-meta">
            <div>
              <span className="meta-label">Location</span>
              <span className="meta-value">Tamil Nadu, India</span>
            </div>
            <div>
              <span className="meta-label">Focus Areas</span>
              <span className="meta-value">
                Data & Financial Analysis · Biomedical Imaging · Machine
                Learning
              </span>
            </div>
          </div>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </div>
        </Reveal>

        <Reveal className="home-profile">
          <div className="profile-card">
            <div
              className="profile-photo-placeholder"
              aria-label="Profile photo placeholder"
            >
              <span>Profile Photo</span>
            </div>
            <div className="profile-summary">
              <h2>Physics · Research · Finance</h2>
              <p>
                MSc Physics graduate from Vellore Institute of Technology with
                experience in retinal OCT analysis, biomedical image
                processing, and financial modeling, including DCF and portfolio
                analysis.
              </p>
              <div className="profile-contact">
                <a href="mailto:jdepan18@gmail.com">jdepan18@gmail.com</a>
                <a
                  href="https://linkedin.com/in/jdeepan18"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container home-sections">
        <Reveal className="home-section-grid">
          <article className="info-card">
            <h3>Research & Imaging</h3>
            <p>
              Experience across retinal OCT, harmonic generation microscopy, and
              quantitative biomedical image analysis, with international
              conference exposure.
            </p>
            <Link to="/research" className="text-link">
              Explore research & publications →
            </Link>
          </article>
          <article className="info-card">
            <h3>Data & Financial Analysis</h3>
            <p>
              Skilled in DCF modeling, investment risk analysis, asset
              management, and portfolio analytics using Python, Excel, and
              financial modeling frameworks.
            </p>
            <Link to="/skills" className="text-link">
              View analytical skillset →
            </Link>
          </article>
          <article className="info-card">
            <h3>Leadership & Outreach</h3>
            <p>
              Proven leadership as Outreach Head at Gurutha Club and Academic
              Secretary, driving community initiatives and academic engagement.
            </p>
            <Link to="/about" className="text-link">
              Learn more about background →
            </Link>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default Home;