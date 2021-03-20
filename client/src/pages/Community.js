/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sidebar from "../components/Sidebar";
import PostInput from "../components/PostInput";
import {Container, Columns} from "../components/Grid";

function Community() {
  return (
    <Container>
      <Columns>
      <div className="column is-one-quarter has-background-white">
        <Sidebar />
      </div>
      <div className="column is-three-quarters">
        <PostInput />
      </div>
      </Columns>
    </Container>
  );
}

export default Community;