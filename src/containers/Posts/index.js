import React from 'react';
import Post from '../../components/Post';
import { PostProvider } from '../../context/postContext';
import usePosts from '../../CustomHooks/usePosts';
import Spinner from '../../utils/svg/Spinner.js';


const Posts = () => {
  const { posts, loading } = usePosts();

  return (
    <PostProvider value={posts}>
      {loading ? <Spinner /> : <Post />}
    </PostProvider>
  );
};

export default Posts;
