import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = ({ post }) => {
    const [comments, setComments] = useState([]);
 
    useEffect( () => {
        axios.get(`http://localhost:3004/comments`)
          .then(response => { const { data } = response;
                const comments = data.filter(comment => comment.postId === post.id);
                const commentOutput = Object.keys(comments).map((i) => comments[i]);
            setComments(commentOutput);
          })
          
          .catch(err => console.error('Error', err))
    }, [post.id]);

    

  return (
    <div>
        <ul>
        {comments.map(comment => (
            <li className="comments" key={comment.id}>{comment.body}</li>
        ))}
        </ul>
    </div>
  );
};

export default Comments;