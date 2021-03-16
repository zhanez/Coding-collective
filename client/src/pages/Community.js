import React from "react";
import Sidebar from "../components/Sidebar";
import Columns from "../components/Grid";

function Community() {
    return (
      <Columns>
        <Sidebar />
        <div className="column">
            <input></input>
            <button>Search</button>
        </div>
      </Columns>
    );
}

export default Community;