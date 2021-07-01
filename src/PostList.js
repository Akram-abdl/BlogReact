import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:3004/posts/')
          .then(response => setPosts(response.data));
    }, []);
    return (
      // <div className="blog-list">
      //   {posts.map(post => (
      //     <div className="blog-preview" key={post.id} >
      //       <h2>{ post.title }</h2>
      //       <p>Written by { post.author }</p>
      //     </div>
      //   ))}
      // </div>
      <div>
        <ul className="list-group">
        {posts.map(post => (
            <li className="list-group-item" key={post.id}>
                <NavLink  to={`/posts/${post.id}`}>{post.title}</NavLink>
            </li>
        ))}
        </ul>
      </div>
    );
}
   
export default PostList;