import { useEffect, useState } from 'react';
import { db } from '../../utils/Firebase';
import timeAgo from '../../utils/time';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection('posts').onSnapshot(snap => {
      const newPosts = snap.docs.map(doc => {
        let id = doc.id;
        let {
          title,
          linkTo,
          imgLink,
          upvote,
          downvote,
          createdAt
        } = doc.data();
        let formatedCreatedAt = timeAgo(createdAt.toDate());
        //console.log(formatedCreatedAt);
        return {
          id,
          title,
          linkTo,
          imgLink,
          upvote,
          downvote,
          formatedCreatedAt
        };
      });

      setPosts(newPosts);
      setLoading(false);
    });
  }, []);
  return { posts, loading };
};

export default usePosts;
