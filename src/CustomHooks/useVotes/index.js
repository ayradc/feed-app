//import { useState } from 'react';
import { db } from '../../utils/Firebase';

const useVote = () => {
  const resMsg = {
    success: 'Document successfully updated!',
    error: 'Error writing document: ',
    vote: 'You can only vote once!'
  };

  const HandleUpVote = (e, id, upvote) => {
    const arrStorage = Object.entries(sessionStorage)
    let i, currentId;
    for (i = 0; i < arrStorage.length; i++) {
      let storageId = arrStorage[i][0]
      if (storageId === id) { currentId = storageId }
    }
    if (currentId !== id) {
      db.collection('posts')
        .doc(id)
        .update({
          upvote: upvote + 1,
          updatedAt: Date.now()
        })
        .then(() => console.log(resMsg.success))
        .catch(error => console.error(resMsg.error, error));
      sessionStorage.setItem(id, true)
    } else console.log(resMsg.vote)
  };

  const HandleDownVote = (e, id, downvote) => {
    const arrStorage = Object.entries(sessionStorage)
    let i, currentId;
    for (i = 0; i < arrStorage.length; i++) {
      let storageId = arrStorage[i][0]
      if (storageId === id) {
        currentId = storageId
      }
    }
    if (currentId !== id) {
      db.collection('posts')
        .doc(id)
        .update({
          downvote: downvote + 1,
          updatedAt: Date.now()
        })
        .then(() => console.log(resMsg.success))
        .catch(error => console.error(resMsg.error, error));
      sessionStorage.setItem(id, true)
    } else console.log(resMsg.vote)
  };

  let handleVote = {
    HandleUpVote, HandleDownVote
  }

  return handleVote;
};
export default useVote;
