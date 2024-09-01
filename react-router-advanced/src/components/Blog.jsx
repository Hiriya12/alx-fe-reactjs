
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <nav>
        <Link to="/blog/1">Post 1</Link>
        <Link to="/blog/2">Post 2</Link>
      </nav>
    </div>
  );
};

export default Blog;