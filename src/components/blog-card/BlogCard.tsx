import React from 'react';
import './BlogCard.scss';

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="blog-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
      <img src={imageUrl} alt={title} />
    </div>
  );
};

export default BlogCard;
