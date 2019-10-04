import React from 'react';
import { RightArrowSvg } from '../../utils/svg'

const Form = () => {
    return (
        <form className='py-4 px-8 mt-4'>
        <input
          className='appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-4'
          type='text'
          name='title'
          placeholder='Post Title' />
        <input
          className='appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-4'
          type='url'
          name='post-url'
          placeholder='Post Link' />
        <input
          className='appearance-none border rounded w-full py-2 px-3 text-gray-600 mb-4'
          type='url'
          name='post-image'
          placeholder='Image Url' />
        <button className='w-full bg-blue-700 hover:bg-blue-900 text-white font-medium py-2 px-8 rounded-full'>
          <RightArrowSvg />
          <span className='ml-1 text-sm font-medium'>Post</span>
        </button>
      </form>
    )
}

export default Form;