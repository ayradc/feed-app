import React from 'react';
import UpVote from './UpVote';
import DownVote from './DownVote';
import Share from './Share';
import { VoteProvider } from '../../../context/voteContext';
import useVote from '../../../CustomHooks/useVotes';

const PostAction = () => {
  const HandleUpVote = useVote();
  return (
    <div className='inline-flex items-center my-1'>
      <VoteProvider value={HandleUpVote}>
        <UpVote />
        <DownVote />
        <Share />
      </VoteProvider>
    </div>
  );
};

export default PostAction;
