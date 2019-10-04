import { createContext } from 'react';

const PostContext = createContext();

export const PostProvider = PostContext.Provider;
export const PostConsumer = PostContext.Consumer;

export default PostContext;
