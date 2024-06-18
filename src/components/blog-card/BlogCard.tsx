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
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
    </div>
  );
};

export default BlogCard;
