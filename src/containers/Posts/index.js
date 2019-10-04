import React from 'react';
import Post from '../../components/Post';
import { PostProvider } from '../../context/postContext';
import usePosts from '../../CustomHooks/usePosts';

const Posts = () => {
  const posts = usePosts();
  return (
    <PostProvider value={{ posts }}>
      <Post />
    </PostProvider>
  );
};

export default Posts;
