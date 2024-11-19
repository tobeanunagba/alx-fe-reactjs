// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery('posts', fetchPosts, {
    staleTime: 30000, // Data remains fresh for 30 seconds
    cacheTime: 60000, // Data stays in cache for 1 minute
    refetchOnWindowFocus: true, // Refetch data when window gains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts {isFetching ? <span>(Updating...)</span> : null}</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;

