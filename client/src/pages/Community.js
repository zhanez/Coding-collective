/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sidebar from "../components/Sidebar";
import {Container, Columns} from "../components/Grid";

function Community() {
    return (
      <Container>
      <Columns>
        <Sidebar />
        <div className="field-body column">
          <div class="field is-grouped">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Find a repository" />
            </p>
            <p class="control">
              <button class="button is-info">
                Search
              </button>
            </p>
          </div>
        </div>
      </Columns>
      </Container>
    );
}

export default Community;