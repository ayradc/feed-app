import React from 'react';
import UpVote from './UpVote'
import DownVote from './DownVote'
import Share from './Share'


const PostAction = props => {
  return (
    <div className='inline-flex items-center my-1'>
        <UpVote />
        <DownVote />
        <Share />
    </div>
  );
};

export default PostAction;