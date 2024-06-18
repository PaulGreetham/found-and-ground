import React from 'react';
import BlogCard from '../../components/blog-card/BlogCard';
import './Home.scss';

const blogPosts = Array.from({ length: 16 }, (_, index) => ({
  title: `Blog Post ${index + 1}`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imageUrl: 'https://via.placeholder.com/300',
  link: '#'
}));

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="blog-card-container">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
            link={post.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
