import React from 'react';
import Reveal from '../components/Reveal';

// Research activities and conference participation
const researchItems = [
  {
    year: '2024',
    title: 'Textural Analysis for Biomarker Identification',
    venue: 'Taiwan Conference',
    type: 'Conference Presentation',
    description:
      'Presented work on using textural analysis of retinal OCT images to identify robust biomarkers distinguishing pathological cases from normal controls.'
  },
  {
    year: '2024',
    title: 'Modified Denoising AHE for Biomedical Images',
    venue: 'IIT Kharagpur',
    type: 'Conference Presentation',
    description:
      'Showcased an improved denoising and Adaptive Histogram Equalization (AHE) pipeline for enhanced visualization of biomedical images.'
  },
  {
    year: '2023',
    title: 'Quantitative Retinal OCT Analysis',
    venue: 'NPS',
    type: 'Conference Presentation',
    description:
      'Discussed methodologies for quantitative analysis of retinal OCT data and potential clinical interpretation of derived biomarkers.'
  },
  {
    year: 'Workshop',
    title: 'Bangalore Microscopy Course',
    venue: 'NCBS',
    type: 'Advanced Workshop',
    description:
      'Participated in intensive training on modern microscopy techniques, data handling, and interpretation.'
  },
  {
    year: 'Workshop',
    title: 'Zemax Optical Design Workshop',
    venue: 'Zemax',
    type: 'Technical Workshop',
    description:
      'Hands-on exposure to optical system design, simulation, and optimization using Zemax tools.'
  }
];

// Research page with timeline-style layout and placeholders
function Research() {
  return (
    <section className="page">
      <div className="container page-header">
        <Reveal>
          <p className="eyebrow">Research & Publications</p>
          <h1>Conferences, Workshops & Scientific Engagements</h1>
          <p className="page-intro">
            A snapshot of research presentations, workshops, and courses that
            showcase continuous engagement with the scientific and professional
            community.
          </p>
        </Reveal>
      </div>

      <div className="container research-layout">
        <Reveal className="research-timeline">
          {researchItems.map((item) => (
            <article key={item.title} className="research-item">
              <div className="timeline-marker" />
              <div className="research-content">
                <p className="research-year">{item.year}</p>
                <h2>{item.title}</h2>
                <p className="research-venue">
                  {item.type} · {item.venue}
                </p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal className="research-gallery">
          <h2>Visual Gallery (Placeholders)</h2>
          <p className="gallery-intro">
            These image placeholders can be replaced with conference photos,
            poster snapshots, or microscopy visualizations.
          </p>
          <div className="gallery-grid">
            <div className="gallery-card">
              <div className="gallery-thumb">
                <span>Conference Poster</span>
              </div>
            </div>
            <div className="gallery-card">
              <div className="gallery-thumb">
                <span>Microscopy Image</span>
              </div>
            </div>
            <div className="gallery-card">
              <div className="gallery-thumb">
                <span>Research Group</span>
              </div>
            </div>
            <div className="gallery-card">
              <div className="gallery-thumb">
                <span>Workshop Session</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Research;