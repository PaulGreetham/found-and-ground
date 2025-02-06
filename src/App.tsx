import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Blog from './pages/blog/Blog';
import BlogPost from './components/blog-post/BlogPost';
import './index.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blog-post/:id" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
