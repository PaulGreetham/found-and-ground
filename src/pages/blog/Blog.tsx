import React from 'react';
import BlogCard from '../../components/blog-card/BlogCard';
import './Blog.scss';

const Blog: React.FC = () => {
  return (
    <div>
      <h2>Blog</h2>
      <p>Here are our latest blog posts.</p>
      <BlogCard
        title="Great Coffee"
        description="Learn how to brew the best coffee."
        imageUrl="/path/to/image.jpg"
        link="/blog/great-coffee"
      />
      {/* Add more BlogCard components as needed */}
    </div>
  );
};

export default Blog;
