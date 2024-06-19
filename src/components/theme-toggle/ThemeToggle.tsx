import React, { useEffect, useState } from 'react';
import './ThemeToggle.scss';

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <span onClick={toggleTheme} className="theme-toggle">
      {theme === 'light' ? 'Dark' : 'Light'}
    </span>
  );
};

export default ThemeToggle;
