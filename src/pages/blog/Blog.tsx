import React from 'react';
import BlogCard from '../../components/blog-card/BlogCard';
import { blogPosts } from '../../data/BlogPosts';
import './Blog.scss';

const Blog: React.FC = () => {
  return (
    <div className="blog-page">
      <h2>Blog</h2>
      <p>Here are our latest blog posts.</p>
      <div className="blog-card-container">
        {blogPosts.map((post, index) => (
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

export default Blog;
