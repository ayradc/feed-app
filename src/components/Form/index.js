import React from 'react';
import { RightArrowSvg } from '../../utils/svg'
import useAddPost from '../../CustomHooks/useAddPost'
import { Error, Success } from '../Alerts'

const Form = () => {
  const { settitle, setLinkTo, setImgLink, handleSubmite, isValid, isSubmit } = useAddPost()

  return (
    <>
      {isValid ? <Error title={'Your post cannot be posted!'} msg={'One of the input fields is emty!'} /> : null}
      {isSubmit ? <Success title={'Your post has been posted!'} msg={'Your post will show up in the Homepage'} /> : null}
      <form className='py-4 px-8 mt-4' onSubmit={handleSubmite}>
        <input
          className='appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-4'
          onChange={e => settitle(e.target.value)}
          type='text'
          name='title'
          placeholder='Post Title' />
        <input
          className='appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-4'
          onChange={e => setLinkTo(e.target.value)}
          type='url'
          name='post-url'
          placeholder='Post Link' />
        <input
          className='appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-4'
          onChange={e => setImgLink(e.target.value)}
          type='url'
          name='post-image'
          placeholder='Image Url' />
        <button className='w-full bg-blue-700 hover:bg-blue-900 text-white font-medium py-2 px-8 rounded-full'>
          <RightArrowSvg />
          <span className='ml-1 text-sm font-medium'>Post</span>
        </button>
      </form>
    </>
  )
}

export default Form;