import React, { useContext } from 'react';
import { DownVoteSvg } from '../../../../utils/svg';
import voteContext from '../../../../context/voteContext';

const DownVote = props => {
  const handleVote = useContext(voteContext);
  const { id, downvote } = props;

  return (
    <button
      onClick={e => handleVote.HandleDownVote(e, id, downvote)}
      className='flex hover:bg-indigo-100 py-1 px-2 m-1 border rounded hover:border-indigo-400 border-indigo-200 outline-none'
    >
      <DownVoteSvg />
      <span className='ml-2 text-xs font-semibold text-grey'>
        {downvote} Dislikes
      </span>
    </button>
  );
};

export default DownVote;
