import React from 'react';
import { useQuery } from 'react-query';

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery('posts', fetchPosts, {
    staleTime: 5000, // Data stays fresh for 5 seconds
    cacheTime: 60000, // Data remains in cache for 60 seconds (1 minute)
    refetchOnWindowFocus: true, // Refetch data when window gains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Refetching...' : 'Refetch Posts'}
      </button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <p>{isFetching ? 'Fetching new data...' : 'Data is cached'}</p>
    </div>
  );
}

export default PostsComponent;