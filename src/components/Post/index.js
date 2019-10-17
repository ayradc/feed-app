import React, { useContext } from 'react';
import Date from './Date';
import PostAction from './PostAction';
import { ExtLinkSvg } from '../../utils/svg';
import postContext from '../../context/postContext';

const Post = () => {
  const posts = useContext(postContext);
  // console.log(typeof posts);
  return (
    <div className='flex flex-row flex-wrap'>
      {posts.map(post => (
        <div key={post.id} className='w-full'>
          <div className='py-2'>
            <div className='shadow hover:shadow-md flex border border-grey-light-alt hover:border-gray-300 rounded bg-white cursor-pointer hover:bg-gray-100'>
              <div className='h-32 lg:h-32 lg:w-32 md:h-32 md:w-32 w-32 overflow-hidden flex flex-col text-center'>
                <img
                  className='object-cover h-48 w-ful'
                  src={post.imgLink}
                  alt=''
                ></img>
              </div>
              <div className='w-11/12 pt-2 ml-4'>
                <Date date={post.formatedCreatedAt} />
                <div className='flex flex-row items-center mb-6'>
                  <ExtLinkSvg />
                  <a
                    href={post.linkTo}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <h2 className='text-lg font-bold text-indigo-700 hover:text-indigo-600'>
                      {post.title}
                    </h2>
                  </a>
                </div>
                <PostAction
                  id={post.id}
                  upvote={post.upvote}
                  downvote={post.downvote}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
