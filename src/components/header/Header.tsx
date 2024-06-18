import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="site-title">
        <span className="name">
          <span className="column column-1">F<span className="rest">ound</span></span>
          <span className="column column-2"><span className="initial">&</span></span>
          <span className="column column-3">G<span className="rest">round</span></span>
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
