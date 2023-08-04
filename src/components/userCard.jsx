/* import React from 'react'; */
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types"; // ES6

/**
 * Renders a card component for a user, displaying their name, email, and avatar.
 * When the user clicks on the card, it navigates to a page displaying the user's posts.
 * 
 * @param {Object} user - An object containing information about the user.
 * @param {string} user.name - The name of the user.
 * @param {string} user.email - The email of the user.
 * @param {string} user.avatar - The URL of the user's avatar image.
 */
export const UserCard = ({ user }) => {
  const navigate = useNavigate();

  /**
   * Navigates to a page displaying the user's posts.
   */
  const navigateToPosts = () => {
    navigate(`/posts/${user.id}`);
  };

  return (
    <div className="userCard" onClick={navigateToPosts}>
      <div>
        <img src={user.avatar} alt={user.name} />
      </div>
      <div>
        <ul>
          <li>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

// Add propTypes to validate the user prop
UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};


