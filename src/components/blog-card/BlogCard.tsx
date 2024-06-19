import React from 'react';
import { BlogCardProps } from '../../types/BlogPosts';
import './BlogCard.scss';

const BlogCard: React.FC<BlogCardProps> = ({ title, index, description, imageUrl, link }) => {
  return (
    <div className="blog-card">
      <div className="top-section">
        <h2>{title}</h2>
        <h3>{index}</h3>
      </div>
      <p>{description}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={title} />
        </a>
      ) : (
        <img src={imageUrl} alt={title} />
      )}
    </div>
  );
};

export default BlogCard;
