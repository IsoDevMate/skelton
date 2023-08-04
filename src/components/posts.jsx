import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton';
import PropTypes from 'prop-types';
import axios from 'axios';

const Posts = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts/`);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError(true);
      }
    };

    fetchPosts();
  }, [userId]);

  return (
    <div className="user-post">
      {loading ? (
        <Skeleton count={2} />
      ) : (
        <>
          <Link to="/">GO Back</Link>
          <h1>Posts</h1>
          {posts.length > 0 ? (
            posts.map(post => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))
          ) : (
            <p>No posts found.</p>
          )}
        </>
      )}
    </div>
  );
};

Posts.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default Posts;
