import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.scss';

interface BlogCardProps {
  title: string;
  index: string;
  description: string;
  imageUrl: string;
  link?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, index, description, imageUrl, link }) => {
  return (
    <Link to={link || '#'} className="blog-card">
      <img src={imageUrl} alt={title} />
      <div className="top-section">
        <span className="post-index">{index}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
