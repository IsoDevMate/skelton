//an array of users(empty array)
//on component rendering ==>function that fetches some fake users set to a local state
//map through each user and set a user card and pass in through the props 

import { useEffect, useState } from "react";
import  { UserCard } from './userCard.jsx'
import { faker } from '@faker-js/faker';



function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Generate some fake user data using Faker
    const fakeUsers = Array.from({ length: 10 }, () => ({
      name: faker.person.findName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    }));

    // Simulate fetching data from an API using Fetch
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=8")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((fakeUsers) => {
        // Use the fake user data instead of the real data
        setUsers(fakeUsers);
       
    })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  fakeUsers()
    },
[]);

  //if (loading) return <div>Loading...</div>;
  //if (error) return <div>Error!</div>;

  return (
    <>
    <h1 style={{ marginBottom: "1.5rem" }}>Users</h1>
    <div className="user-container">
        {loading && 
        <div>Loading...</div>
         }
         {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
        )} 
        <ul> 
        {users &&    
        users.map((user)=>(
            <UserCard user={user} key={user.id} />
        /*  <li key={user.email}>
            <img src={user.avatar} alt={user.name} />
            <p>{user.name}</p>
            <p>{user.email}</p
            >
          </li>*/
        ))}
      </ul>
    </div>
    </>
  );
}

export default App;
