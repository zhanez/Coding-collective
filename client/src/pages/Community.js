/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import PostInput from "../components/PostInput";
import { Columns } from "../components/Grid";
import Post from "../components/Post";
import feedAPI from "../utils/feedAPI";
import { useAuthenticatedUser } from "../utils/auth.js";
import API from "../utils/API";

function Community() {
  // Setting our component's initial state
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all posts and store them with setPosts
  useEffect(() => {
    loadPosts()
  }, [])

  // Loads all posts and sets them to posts
  function loadPosts() {
    feedAPI.getPosts()
      .then(res => {
        setPosts(res.data);
        setSearch(res.data);
      })
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // const isAuthenticated = useIsAuthenticated();
  const currentUser = useAuthenticatedUser();
  console.log(currentUser);

  const [user, setUser] = useState([]);
  
  useEffect(() => {
    loadUser()
  }, [])

  function loadUser() {
    API.getClassmate(currentUser._id)
      .then(res => {
        console.log(res.data)
        setUser(res.data)
      })
      .catch(err => console.log(err));
  };

  // When the form is submitted, use the API.savePost method to save the post data
  // Then reload posts from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.content) {
      feedAPI.savePost({
        user: user.firstName,
        title: formObject.title,
        content: formObject.content,
        category: formObject.category
      })
      .then(res => loadPosts())
      .catch(err => console.log(err));
    }
  };

  // handle input to filter posts by title
  const handleSearch = (event) => {
    event.preventDefault();
    let filterTitle = search.filter((search) => 
      `${search.title}`.toLowerCase().includes(
        document.querySelector("#post").value.toLowerCase()
      )
    );
    setPosts([...filterTitle]);
  }

  return (
    <div className="mb-6">
      <h1 className="glow">CODING COLLECTIVE</h1>
      <div>
        <Columns>
          <Sidebar 
            handleSearch={handleSearch}
          />
          <div className="column is-three-quarters" id="post">
            <PostInput 
              user = {user.firstName}
              handleTitle={handleInputChange}
              handleContent={handleInputChange}
              handleCategory={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
            <Post 
              posts={posts}
            />
          </div>
        </Columns>
      </div>
    </div>  
  );
}

export default Community;