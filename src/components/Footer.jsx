import React from 'react';

// Footer with quick contact details
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <p className="footer-title">Deepan J</p>
          <p className="footer-subtitle">
            Physics Graduate · Researcher · Data & Financial Analyst
          </p>
        </div>
        <div className="footer-contact">
          <a href="mailto:jdepan18@gmail.com">jdepan18@gmail.com</a>
          <a href="tel:+919361159775">+91&nbsp;9361159775</a>
          <a
            href="https://linkedin.com/in/jdeepan18"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Deepan J. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;