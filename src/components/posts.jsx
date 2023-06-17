//when post component renders:
//grab userId with useParams hook
//fetch users post bassed on their id result is array of post
//set post to first item of the array
//display post tile and body display link to go back

import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Skeleton from 'react-loading-skeleton'

const Posts = () => {
    const { userId } = useParams()
     const [post, setPost] = useState([]);
     const [loading, setLoading] = useState(true);
   
     useEffect(()=>{
       fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts/`)
        .then((res)=>res.json())
        .then((posts)=> {
            setPost(posts[0])
            setLoading(false)
        })
    },[userId])

  return (
    <div className="user-post">
        {loading &&
         <div>Loading...</div>}
        {!loading &&
        <Link to='/'>GO Back</Link>}

        <h3>{post.id || <Skeleton />}</h3>
        <p>{post.title || <Skeleton />}</p>
    </div>
  )
}

export default Posts