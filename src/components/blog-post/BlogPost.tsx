import React from 'react';
import { useParams } from 'react-router-dom';
import { blogContent } from '../../data/BlogContent';
import BlogContent from '../blog-content/BlogContent';
import './BlogPost.scss';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const post = blogContent[`blog-post-${id}`];

  console.log('Current ID:', id);
  console.log('Available posts:', Object.keys(blogContent));
  console.log('Current post:', post);

  if (!post) {
    return <div className="blog-post-error">Blog post not found</div>;
  }

  return (
    <div className="blog-post">
      <article>
        <header>
          <span className="post-index">{post.index}</span>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="author">By {post.author}</span>
            <span className="date">{post.publishDate}</span>
            <span className="read-time">{post.readTime}</span>
          </div>
        </header>
        
        <img src={post.imageUrl} alt={post.title} className="hero-image" />
        <BlogContent content={post.content} />
      </article>
    </div>
  );
};

export default BlogPost; 