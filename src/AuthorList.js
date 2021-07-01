import React from "react";
import PostList from "./PostList";
import { useState, useEffect } from "react";
import axios from "axios";
import Author from "../components/Author";

const AuthorList = ({ match }) => {
  const [author, setAuthor] = useState([]);
  const {
    params: { authorId },
  } = match;

  useEffect(() => {
    axios
      .get(`http://localhost:3004/authors/${authorId}`)
      .then((response) => {
        const { data } = response;
        setAuthor(data);
      })
      .catch((err) => console.error("Error", err));
  }, [authorId]);

  if (!author) {
    return null;
  }

  return (
    <div>
      <PostList />

      <div>
        <Author author={author} />
      </div>
    </div>
  );
};

export default AuthorList;