import React from 'react';
import { RightArrowSvg } from '../../utils/svg';
import useAddPost from '../../CustomHooks/useAddPost';
import { Error, Success } from '../Alerts';

const Form = () => {
  const {
    setTitle,
    setLinkTo,
    setImgLink,
    handleSubmite,
    isValid,
    isSubmit
  } = useAddPost();

  return (
    <>
      {isValid ? (
        <Error
          title={'Your post cannot be posted!'}
          msg={'One of the input fields is emty!'}
        />
      ) : null}
      {isSubmit ? (
        <Success
          title={'Your post has been posted!'}
          msg={'Your post will show up in the Homepage'}
        />
      ) : null}
      <form className='py-4 px-8 mt-4' onSubmit={handleSubmite}>
        <input
          className='appearance-none border rounded w-full py-2 px-3 border-indigo-200 text-indigo-600 mb-4 placeholder-indigo-200 outline-none'
          onChange={e => setTitle(e.target.value)}
          type='text'
          name='title'
          placeholder='Give your post a title....'
        />
        <input
          className='appearance-none border rounded w-full py-2 px-3 border-indigo-200 text-indigo-600 mb-4 placeholder-indigo-200 outline-none'
          onChange={e => setLinkTo(e.target.value)}
          type='url'
          name='post-url'
          placeholder='Paste your external link...'
        />
        <input
          className='appearance-none border rounded w-full py-2 px-3 border-indigo-200 text-indigo-600 mb-4 placeholder-indigo-200 outline-none'
          onChange={e => setImgLink(e.target.value)}
          type='url'
          name='post-image'
          placeholder='Paste image URL'
        />
        <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-8 rounded-sm'>
          <RightArrowSvg />
          <span className='ml-1 text-sm font-medium'>Post</span>
        </button>
      </form>
    </>
  );
};

export default Form;
