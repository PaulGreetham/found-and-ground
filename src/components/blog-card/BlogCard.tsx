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
      <div className="top-section">
        <div className="title-section">
          <h2>{title}</h2>
          <span className="post-index">{index}</span>
        </div>
        <p>{description}</p>
      </div>
      <img src={imageUrl} alt={title} />
    </Link>
  );
};

export default BlogCard;
