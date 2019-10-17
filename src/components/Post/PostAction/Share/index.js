import React from 'react';
import { ShareSvg } from '../../../../utils/svg';

const Share = () => {
  return (
    <button className='invisible md:visible flex hover:bg-indigo-100 py-1 px-2 m-1 border rounded hover:border-indigo-400 border-indigo-200 outline-none'>
      <ShareSvg />
      <span className='ml-2 text-xs font-semibold text-grey'>Share</span>
    </button>
  );
};

export default Share;
