import React from 'react';
import { ErrorSvg, SuccessSvg } from '../../utils/svg';

const Error = () => {
  return (
    <div className='flex bg-red-300 p-4'>
      <div className='mr-4'>
        <div className='h-10 w-10 text-white bg-red-800 rounded-full flex justify-center items-center'>
          <ErrorSvg />
        </div>
      </div>
      <div className='flex justify-between w-full'>
        <div className='text-red-800'>
          <p className='mb-1 font-bold'>Error</p>
          <p className='text-xs'>Error</p>
        </div>
      </div>
    </div>
  );
};

const Success = () => {
  return (
    <div className='flex bg-green-300 p-4'>
      <div className='mr-4'>
        <div className='h-10 w-10 text-white bg-green-800 rounded-full flex justify-center items-center'>
          <SuccessSvg />
        </div>
      </div>
      <div className='flex justify-between w-full'>
        <div className='text-green-800'>
          <p className='mb-1 font-bold'>Success</p>
          <p className='text-xs'>Success</p>
        </div>
      </div>
    </div>
  );
};

export { Error, Success };
