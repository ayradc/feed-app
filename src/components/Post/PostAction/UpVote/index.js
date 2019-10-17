import React, { useContext } from 'react';
import { UpVoteSvg } from '../../../../utils/svg';
import voteContext from '../../../../context/voteContext';

const UpVote = props => {
  const handleVote = useContext(voteContext);
  const { id, upvote } = props;

  return (
    <button
      onClick={e => handleVote.HandleUpVote(e, id, upvote)}
      className='flex hover:bg-indigo-100 py-1 px-2 m-1 border rounded hover:border-indigo-400 border-indigo-200 outline-none'
    >
      <UpVoteSvg />
      <span className='ml-2 text-xs font-semibold text-grey'>
        {upvote} Likes
      </span>
    </button>
  );
};

export default UpVote;
