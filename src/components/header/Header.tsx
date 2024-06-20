import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import ThemeToggle from '../theme-toggle/ThemeToggle';

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/" className="site-title-link">
        <h1>
          <span className="name">
              <span className="initial">F</span>
              <span className="rest">O</span>
              <span className="rest">U</span>
              <span className="rest">N</span>
              <span className="rest">D</span>
              <span className="rest">+</span>
              <span className="rest">G</span>
              <span className="rest">R</span>
              <span className="rest">O</span>
              <span className="rest">U</span>
              <span className="rest">N</span>
              <span className="rest">D</span>
          </span>
        </h1>
      </Link>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
