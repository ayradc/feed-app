import React, { useContext } from 'react';
import { DownVoteSvg } from '../../../../utils/svg';
import postContext from '../../../../context/voteContext';

const DownVote = props => {
  const { HandleDownVote } = useContext(postContext);
  const { id, downvote } = props;

  return (
    <button
      onClick={e => HandleDownVote(e, id, downvote)}
      className='flex hover:bg-gray-200 py-1 px-2 m-1'
    >
      <DownVoteSvg />
      <span className='ml-2 text-xs font-semibold text-grey'>
        {downvote} Dislikes
      </span>
    </button>
  );
};

export default DownVote;
