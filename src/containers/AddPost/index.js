import React from 'react';
import Form from '../../components/Form';

const AddPost = () => {
  return (
    <div className='w-full mx-auto bg-white rounded shadow border border-indigo-100'>
      <div className='py-4 px-8 text-bold text-xl border-b border-indigo-400 text-indigo-400'>
        Create a post
      </div>
      <Form />
    </div>
  );
};

export default AddPost;
