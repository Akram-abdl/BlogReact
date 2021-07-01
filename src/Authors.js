import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Authors = ({ authors }) => {
    const [posts, setPosts] = useState([]);
  
    useEffect( () => {
      axios
        .get(`http://localhost:3004/posts`)
        .then(response => {
          const { data } = response;
          const posts = data.filter(post => post.authorId === authors.id);
          const postOutput = Object.keys(posts).map((i) => posts[i]);

          setPosts(postOutput);
          console.log(authors.id)
        })
        .catch(err => console.error('An error has occured', err))
    }, [authors.id]);
    
  
    return (
      <>
  
        <h3>{authors.name}</h3>
        <ul className="list-group">
          {posts.map(post => (
              <li className="list-group-item" key={post.id}>
                  <NavLink  to={`/posts/${post.id}`}>Post title : "{post.title}"</NavLink>
              </li>
          ))}
        </ul>
  
      </>
    );
  }
  
export default Authors;