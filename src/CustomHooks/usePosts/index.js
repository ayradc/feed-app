import { useEffect, useState } from 'react';
import { db } from '../../utils/Firebase';
import timeAgo from '../../utils/time';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = db
      .collection('posts')
      .orderBy('upvote', 'desc')
      .limit(20)
      .onSnapshot(snap => {
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
    return () => unsubscribe();
  }, []);
  return { posts, loading };
};

export default usePosts;
