import React from 'react';
import './BlogContent.scss';

interface BlogSection {
  title: string;
  content: string;
}

interface BlogContentProps {
  content: {
    sections: BlogSection[];
  };
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <div className="blog-content">
      {content.sections.map((section, index) => (
        <section key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </div>
  );
};

export default BlogContent;
