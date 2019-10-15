import React, { useContext } from 'react';
import { UpVoteSvg } from '../../../../utils/svg';
import postContext from '../../../../context/voteContext';

const UpVote = props => {
  const HandleUpVote = useContext(postContext);
  const { id, upvote } = props;

  return (
    <button
      onClick={e => HandleUpVote(e, id, upvote)}
      className='flex hover:bg-gray-200 py-1 px-2 m-1'
    >
      <UpVoteSvg />
      <span className='ml-2 text-xs font-semibold text-grey'>
        {upvote} Likes
      </span>
    </button>
  );
};

export default UpVote;
