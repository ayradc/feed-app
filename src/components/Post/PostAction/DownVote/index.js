import React, { useContext } from 'react';
import { DownVoteSvg } from '../../../../utils/svg';
import postContext from '../../../../context/voteContext';

const DownVote = () => {
  const { handleDownVote, downVote } = useContext(postContext);
  return (
    <button
      onClick={handleDownVote}
      className='flex hover:bg-gray-200 py-1 px-2 m-1'
    >
      <DownVoteSvg />
      <span className='ml-2 text-xs font-semibold text-grey'>
        {downVote} Dislikes
      </span>
    </button>
  );
};

export default DownVote;
