import { useEffect, useState } from 'react';
import { db } from '../../utils/Firebase';

const useVote = () => {
  const HandleUpVote = (e, id, upvote) => {
    console.log(' this is the licked id ' + ' ' + id);
    db.collection('posts')
      .doc(id)
      .update({
        upvote: upvote + 1,
        updatedAt: Date.now()
      })
      .then(function() {
        console.log('Document successfully updated!');
      })
      .catch(function(error) {
        console.error('Error writing document: ', error);
      });
  };

  const HandleDownVote = (e, id, downvote) => {
    db.collection('posts')
      .doc(id)
      .update({
        downvote: downvote + 1,
        updatedAt: Date.now()
      })
      .then(function() {
        console.log('Document successfully updated!');
      })
      .catch(function(error) {
        console.error('Error Updating document: ', error);
      });
  };

  return { HandleUpVote, HandleDownVote };
};

export default useVote;
