import { useEffect, useState } from 'react';
import { db } from '../../utils/Firebase';
import timeAgo from '../../utils/time';

const usePosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snap => {
      const newPosts = snap.docs.map(doc => {
        let id = doc.id;
        let { title, linkTo, upvote, downvote, imgLink } = doc.data();
        let createdAt = timeAgo(doc._document.proto.createTime);
        return { id, title, linkTo, createdAt, upvote, downvote, imgLink };
      });
      setPosts(newPosts);
      setLoading(false);
    });
  }, []);

  return loading, posts;
};

export default usePosts;
