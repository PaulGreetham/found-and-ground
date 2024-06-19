import React from 'react';
import BlogCard from '../../components/blog-card/BlogCard';
import { blogPosts } from '../../data/BlogPosts';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="blog-card-container">
        {blogPosts.slice().reverse().map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            index={post.index}
            description={post.description}
            imageUrl={post.imageUrl}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
