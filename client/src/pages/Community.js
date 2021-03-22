/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import PostInput from "../components/PostInput";
import {Container, Columns} from "../components/Grid";
import Post from "../components/Post";
import feedAPI from "../utils/feedAPI";

function Community() {
  // Setting our component's initial state
  const [posts, setPosts] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all posts and store them with setPosts
  useEffect(() => {
    loadPosts()
  }, [])

  // Loads all posts and sets them to posts
  function loadPosts() {
    feedAPI.getPosts()
      .then(res => 
        setPosts(res.data)
      )
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.savePost method to save the post data
  // Then reload posts from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.content) {
      feedAPI.savePost({
        title: formObject.title,
        content: formObject.content,
      })
        .then(res => loadPosts())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container>
      <Columns>
      <div className="column is-one-quarter has-background-white">
        <Sidebar />
      </div>
      <div className="column is-three-quarters">
        <Post 
          posts={posts}
        />
      </div>
      </Columns>
      <PostInput 
        handleTitle={handleInputChange}
        handleContent={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </Container>
  );
}

export default Community;