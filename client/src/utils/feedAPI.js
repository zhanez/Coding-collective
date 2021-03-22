/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/feeds");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/feeds/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/feeds/" + id);
  },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/feeds", postData);
  }
};