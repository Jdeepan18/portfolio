import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import ProjectModal from '../components/ProjectModal';

// Project definitions for grid and modal details
const projects = [
  {
    id: 1,
    title: 'Retinal OCT Image Analysis',
    subtitle: 'Quantitative biomarkers for retinal health',
    shortDescription:
      'End-to-end pipeline for quantitative analysis of retinal OCT images, focusing on structural biomarkers and disease differentiation.',
    longDescription:
      'Developed a quantitative framework for analyzing retinal Optical Coherence Tomography (OCT) images. The work involved preprocessing, layer segmentation, feature extraction, and statistical evaluation of biomarkers to distinguish between normal and pathological cases.',
    highlights: [
      'Designed preprocessing pipeline for noise reduction and contrast normalization',
      'Extracted textural and structural features from retinal layers',
      'Evaluated potential biomarkers for clinical decision support'
    ],
    tools: ['Python', 'Image Processing', 'Statistical Analysis', 'OCT'],
    focus: 'Biomedical Imaging'
  },
  {
    id: 2,
    title: 'Denoising & Contrast Enhancement',
    subtitle: 'Improved visibility in biomedical images',
    shortDescription:
      'Hybrid denoising and adaptive histogram equalization method tailored for biomedical imaging modalities.',
    longDescription:
      'Implemented and evaluated modified denoising and Adaptive Histogram Equalization (AHE) techniques to enhance the visibility of biomedical image structures while preserving diagnostically relevant details. The approach targeted improved signal-to-noise ratio and enhanced contrast for downstream analysis.',
    highlights: [
      'Compared multiple denoising strategies on biomedical datasets',
      'Integrated modified AHE for localized contrast improvements',
      'Prepared results for presentation at major conferences'
    ],
    tools: ['Python', 'MATLAB', 'Numerical Methods', 'AHE'],
    focus: 'Image Processing'
  },
  {
    id: 3,
    title: 'Brain Tissue Imaging via Harmonic Generation',
    subtitle: 'Label-free microscopy techniques',
    shortDescription:
      'Analysis of brain tissue imaging data using harmonic generation microscopy to highlight microstructural features.',
    longDescription:
      'Worked with harmonic generation microscopy data to investigate brain tissue microstructure. Focused on signal interpretation, quantitative feature extraction, and visualization to support neuroscientific and biomedical research.',
    highlights: [
      'Collaborated with imaging experts to understand data acquisition',
      'Processed large imaging datasets for structural analysis',
      'Generated visualizations for presentations and academic review'
    ],
    tools: ['Microscopy', 'Python', 'Signal Analysis'],
    focus: 'Microscopy'
  },
  {
    id: 4,
    title: 'Textural Biomarker Identification',
    subtitle: 'CNV vs normal OCT patterns',
    shortDescription:
      'Textural pattern analysis to differentiate choroidal neovascularization (CNV) from normal retinal OCT images.',
    longDescription:
      'Investigated textural biomarkers within retinal OCT images to distinguish CNV cases from healthy controls. This included feature engineering, classification experiments, and evaluation of diagnostic performance metrics.',
    highlights: [
      'Defined and engineered texture descriptors from OCT imagery',
      'Conducted experiments to compare CNV vs normal tissue signatures',
      'Presented findings to scientific audiences for feedback'
    ],
    tools: ['Python', 'Machine Learning', 'Texture Analysis'],
    focus: 'Biomarkers'
  }
];

// Projects page with interactive grid and modal
function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="page">
      <div className="container page-header">
        <Reveal>
          <p className="eyebrow">Projects</p>
          <h1>Scientific & Analytical Projects</h1>
          <p className="page-intro">
            Selected projects spanning biomedical image analysis, quantitative
            OCT research, and advanced microscopy, supported by strong data and
            numerical analysis skills.
          </p>
        </Reveal>
      </div>

      <div className="container">
        <Reveal className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card"
              onClick={() => setActiveProject(project)}
            >
              <div className="project-thumbnail" aria-hidden="true">
                <div className="thumbnail-label">Image Placeholder</div>
              </div>
              <div className="project-content">
                <h2>{project.title}</h2>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.shortDescription}</p>
                <div className="project-meta">
                  <span className="project-focus">{project.focus}</span>
                  <div className="project-tags">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span key={tool} className="tag tag-soft">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProject(project);
                  }}
                >
                  View details
                </button>
              </div>
            </article>
          ))}
        </Reveal>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}

export default Projects;