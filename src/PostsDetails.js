import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./PostList";
import { NavLink } from "react-router-dom";
import Comments from "./Comments";
import Navbar from "./Navbar";

const PostsDetails = ({ match }) => {
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState([]);
  const [comment, setComment] = useState([]);
  const {
    params: { postId },
  } = match;

  const getComment = () =>
    axios
      .get(`http://localhost:3004/comments/`)
      .then((response) => response.data);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/posts/${postId}`)
      .then((response) => {
        const { data } = response;
        getComment(data.commentId).then((thiscomment) => {
          setPost(data);
          setComment(thiscomment);
        });
      })
      .catch((err) => console.error("Error", err));
  }, [postId]);

  const getAuthor = (authorId) =>
    axios
      .get(`http://localhost:3004/authors/${authorId}`)
      .then((response) => response.data);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/posts/${postId}`)
      .then((response) => {
        const { data } = response;
        getAuthor(data.authorId).then((thisAuthor) => {
          setPost(data);
          setAuthor(thisAuthor);
        });
      })
      .catch((err) => console.error("Error", err));
  }, [postId]);

  if (!post) {
    return null;
  }

  return (
 
    <div>
      <Navbar></Navbar>
      <PostList />
      <div className="card" style={{width: '18 rem',}}>
        <div className="card-body">
          <h5 className="card-title"key={post.id}>{post.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted" ><NavLink to={`/authors/${author.id}`}>Author : {author.name}</NavLink></h6>
          <p className="card-text">{post.description}</p>
          
        </div>
      </div>
      <div><p>Comments</p>
      <Comments post={post} /></div>
      
    </div>
    
  );
};

export default PostsDetails;