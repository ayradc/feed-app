import { useEffect, useState } from 'react';
import { db } from '../../utils/Firebase';

const useVote = () => {
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);
  useEffect(() => {
    db.collection('posts').onSnapshot(snap => {
      let votes = snap.docs.map(doc => {
        let { upvote, downvote } = doc.data();
        return { upvote, downvote };
      });
      /// votes[0] is the index of a spesific document
      let { upvote, downvote } = votes[0];
      console.log(downvote);
      setUpVote(upvote);
      setDownVote(downvote);
    });
  }, [upVote, downVote]);

  const HandleUpVote = () => {
    db.collection('posts')
      .doc('iaZejMA6bnn4vqMzVC5x')
      .update({
        upvote: upVote + 1,
        updatedAt: Date.now()
      })
      .then(function() {
        console.log('Document successfully updated!');
      })
      .catch(function(error) {
        console.error('Error writing document: ', error);
      });
  };

  const handleDownVote = () => {
    db.collection('posts')
      .doc('iaZejMA6bnn4vqMzVC5x')
      .update({
        downvote: downVote + 1,
        updatedAt: Date.now()
      })
      .then(function() {
        console.log('Document successfully updated!');
      })
      .catch(function(error) {
        console.error('Error Updating document: ', error);
      });
  };

  return { HandleUpVote, handleDownVote, upVote, downVote };
};

export default useVote;
