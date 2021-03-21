/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sidebar from "../components/Sidebar";
import PostInput from "../components/PostInput";
import {Container, Columns} from "../components/Grid";
import Post from "../components/Post";

function Community() {
  return (
    <Container>
      <Columns>
      <div className="column is-one-quarter has-background-white">
        <Sidebar />
      </div>
      <div className="column is-three-quarters">
        <Post />
      </div>
      </Columns>
      <PostInput />
    </Container>
  );
}

export default Community;