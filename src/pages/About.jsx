import React from 'react';
import Reveal from '../components/Reveal';

// About page with academic overview and experience timeline
function About() {
  return (
    <section className="page">
      <div className="container page-header">
        <Reveal>
          <p className="eyebrow">About</p>
          <h1>Academic & Professional Journey</h1>
          <p className="page-intro">
            Deepan J is a Physics graduate with a strong foundation in
            scientific research, numerical methods, and quantitative analysis.
            He combines experience in biomedical imaging, astrophysics, and
            financial analytics to solve complex, data-driven problems.
          </p>
        </Reveal>
      </div>

      <div className="container about-grid">
        <Reveal className="about-column">
          <h2>Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <h3>MSc Physics</h3>
                <p className="timeline-org">
                  Vellore Institute of Technology · 2023
                </p>
                <p className="timeline-meta">CGPA: 8.28 / 10.0</p>
                <p>
                  Graduate studies with focus on advanced physics, numerical
                  analysis, and research in biomedical imaging and quantitative
                  analysis.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <h3>BSc Physics</h3>
                <p className="timeline-org">
                  Sacred Heart College Autonomous, Tirupattur · 2021
                </p>
                <p className="timeline-meta">CGPA: 7.47 / 10.0</p>
                <p>
                  Undergraduate work emphasizing classical and modern physics,
                  laboratory practice, and early exposure to research and
                  academic leadership.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="about-column">
          <h2>Leadership & Volunteering</h2>
          <div className="card-list">
            <article className="card-list-item">
              <h3>Outreach Head</h3>
              <p className="timeline-org">
                Gurutha Club · VIT · Feb 2022 – Nov 2022
              </p>
              <p>
                Led outreach initiatives, coordinated events, and connected
                students with academic and industry mentors, improving community
                engagement and program visibility.
              </p>
            </article>
            <article className="card-list-item">
              <h3>UG Physics Academic Secretary</h3>
              <p className="timeline-org">
                Sacred Heart College · Jul 2020 – Apr 2021
              </p>
              <p>
                Represented the physics student body, organized academic
                activities, and facilitated communication between students and
                faculty.
              </p>
            </article>
            <article className="card-list-item">
              <h3>
                Astrophysics Operations Head &amp; Senior Researcher
                (Volunteering)
              </h3>
              <p className="timeline-org">
                Aug 2021 – Feb 2023
              </p>
              <p>
                Oversaw research operations in astrophysics, mentored junior
                researchers, and contributed to observational and theoretical
                work with a focus on data-driven methodologies.
              </p>
            </article>
          </div>
        </Reveal>
      </div>

      <div className="container about-certifications">
        <Reveal>
          <h2>Certifications & Professional Programs</h2>
          <div className="cert-grid">
            <div className="cert-card">
              <h3>Finance & Investment</h3>
              <ul>
                <li>Investment Risk Management – Coursera Guided Project (Jul 2023)</li>
                <li>DCF Modeling Crash Course – Wall Street Oasis (Jul 2023)</li>
                <li>JPMorgan Investment Banking Virtual Experience (Jun 2023)</li>
                <li>JPMorgan Asset Management Program (Jun 2023)</li>
                <li>JPMorgan Global Finance & Business Management Program (Jun 2023)</li>
              </ul>
            </div>
            <div className="cert-card">
              <h3>Data & Quantitative Skills</h3>
              <ul>
                <li>Data-driven Astronomy – Coursera (Apr 2022)</li>
                <li>Numerical Analysis – NPTEL (Dec 2022)</li>
                <li>Excel Skills Virtual Experience – JPMorgan (Jun 2023)</li>
                <li>Internal Auditing: Fundamental Principles – Alison (Jun 2023)</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;