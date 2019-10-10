import React, { useContext } from 'react';
import { UpVoteSvg } from '../../../../utils/svg';
import postContext from '../../../../context/voteContext';

const UpVote = () => {
  const { HandleUpVote, upVote } = useContext(postContext);
  return (
    <button
      onClick={HandleUpVote}
      className='flex hover:bg-gray-200 py-1 px-2 m-1'
    >
      <UpVoteSvg />
      <span className='ml-2 text-xs font-semibold text-grey'>
        {upVote} Likes
      </span>
    </button>
  );
};

export default UpVote;
