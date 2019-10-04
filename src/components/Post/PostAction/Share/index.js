import React from 'react';
import { ShareSvg } from '../../../../utils/svg'

const Share = () => {
  return (
    <button className='flex hover:bg-gray-200 py-1 px-2 m-1'>
        <ShareSvg />
        <span className='ml-2 text-xs font-semibold text-grey'>Share</span>
    </button>
  );
};

export default Share;