import axios from 'axios';
//an array of users(empty array)
//on component rendering ==>function that fetches some fake users set to a local state
//map through each user and set a user card and pass in through the props 

import { useEffect, useState } from "react";
import  { UserCard } from './userCard.jsx'
import faker from "faker";



function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=8");
      setUsers(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fakeUsers = Array.from({ length: 10 }, () => ({
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    }));

    fetchUsers();
    setUsers(fakeUsers);
  }, []);

  return (
    <>
      <h1 style={{ marginBottom: "1.5rem" }}>Users</h1>
      <div className="user-container">
        {loading && <div>Loading...</div>}
        {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
        <ul>
          {users &&
            users.map((user) => (
              <UserCard user={user} key={user.id} />
            ))}
        </ul>
      </div>
    </>
  );
}

export default App;


