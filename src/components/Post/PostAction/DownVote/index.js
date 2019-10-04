import React from 'react';
import { DownVoteSvg } from '../../../../utils/svg'

const DownVote = () => {
  return (
    <button className='flex hover:bg-gray-200 py-1 px-2 m-1'>
        <DownVoteSvg />
        <span className='ml-2 text-xs font-semibold text-grey'>
        30 Dislikes
        </span>
    </button>
  );
};

export default DownVote;