import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  return <div>Displaying blog post {id}</div>;
};

export default BlogPost;