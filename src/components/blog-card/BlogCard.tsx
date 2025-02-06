import React from 'react';
import { Link } from 'react-router-dom';
import { BlogCardProps } from '../../types/BlogPosts';
import './BlogCard.scss';

const BlogCard = ({ title, index, description, imageUrl, link }: BlogCardProps) => {
  return (
    <div className="blog-card">
      <div className="top-section">
        <h2>{title}</h2>
        <h3>{index}</h3>
      </div>
      <p>{description}</p>
      {link ? (
        <Link to={link}>
          <img src={imageUrl} alt={title} />
        </Link>
      ) : (
        <img src={imageUrl} alt={title} />
      )}
    </div>
  );
};

export default React.memo(BlogCard);
