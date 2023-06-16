// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

import useNavigate from "react-router-dom";
import PropTypes from "prop-types"; // ES6

export const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const submit = () => {
    navigate(`/posts/${user.id}`);
  };
  return (
    <>
      <div className="userCard" onClick={submit}>
        <div>
          <img src={user.avatar} alt={user.name} />
        </div>
        <div>
          <ul>
            <li key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
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


