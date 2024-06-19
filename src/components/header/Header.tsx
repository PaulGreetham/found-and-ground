import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="site-title">
        <span className="name">
          <div className="first-word">
            <span className="initial">F</span>
            <span className="rest">O</span>
            <span className="rest">U</span>
            <span className="rest">N</span>
            <span className="rest">D</span>
            <span className="space"></span>
            <span className="rest">+</span>
          </div>
          <div className="second-word">
            <span className="initial">G</span>
            <span className="rest">R</span>
            <span className="rest">O</span>
            <span className="rest">U</span>
            <span className="rest">N</span>
            <span className="rest">D</span>
          </div>
        </span>
      </h1>
      <nav>
        <ul>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
