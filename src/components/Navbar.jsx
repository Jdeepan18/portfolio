import React from 'react';
import { NavLink } from 'react-router-dom';

// Sticky navigation bar with active link styles
function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar container">
        <div className="navbar-brand">
          <div className="brand-avatar" aria-hidden="true">
            DJ
          </div>
          <div className="brand-text">
            <span className="brand-name">Deepan J</span>
            <span className="brand-subtitle">Physics • Research • Finance</span>
          </div>
        </div>
        <ul className="navbar-links" aria-label="Main navigation">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' nav-link-active' : '')
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' nav-link-active' : '')
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' nav-link-active' : '')
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' nav-link-active' : '')
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/research"
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' nav-link-active' : '')
              }
            >
              Research
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' nav-link-active' : '')
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;