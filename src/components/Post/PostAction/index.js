import React from 'react';
import UpVote from './UpVote';
import DownVote from './DownVote';
import Share from './Share';
import { VoteProvider } from '../../../context/voteContext';
import useVote from '../../../CustomHooks/useVotes';

const PostAction = props => {
  const handleVote = useVote();
  const { id, upvote, downvote } = props;
  return (
    <div className='inline-flex items-center my-1'>
      <VoteProvider value={handleVote}>
        <UpVote id={id} upvote={upvote} />
        <DownVote id={id} downvote={downvote} />
        <Share />
      </VoteProvider>
    </div>
  );
};

export default PostAction;
