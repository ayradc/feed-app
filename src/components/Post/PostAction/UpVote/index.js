import React from 'react';
import { UpVoteSvg } from '../../../../utils/svg'

const UpVote = () => {
  return (
    <button className='flex hover:bg-gray-200 py-1 px-2 m-1'>
        <UpVoteSvg />
        <span className='ml-2 text-xs font-semibold text-grey'>
        80 Likes
        </span>
    </button>
  );
};

export default UpVote;