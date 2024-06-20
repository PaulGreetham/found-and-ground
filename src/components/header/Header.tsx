import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import ThemeToggle from '../theme-toggle/ThemeToggle';

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/" className="site-title-link">
        <h1>FOUND + GROUND</h1>
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
