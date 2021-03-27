/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";


function Sidebar(props) {
  const [users, setUsers] = useState([]);
    useEffect(() => {
      loadUsers()
    }, [])

    function loadUsers() {
      API.getallUsers()
        .then(res => {
          console.log(res.data)
          setUsers(res.data)
        }).catch(err => console.log(err));
    };    
    
  console.log(users);

  return (
    <aside className="menu pl-6 pt-5">
      <p className="menu-label">
        My Colleagues:
      </p>
      <ul className="menu-list">
        {users.map(user => 
          <li key={user._id}>
            <a>{user.firstName} {user.lastName}</a>
          </li>
        )}
      </ul>

      {/* <p class="menu-label">
        Find Posts by Category:
      </p>
      <ul class="menu-list">
        <li><a>Coding Issues</a></li>
        <li><a>Share Content</a></li>
        <li><a>Other</a></li>
      </ul> */}
      <p className="menu-label search-label">Search Posts:</p>
      <div className="field has-addons searchBar">
        <div className="control">
          <input 
            className="input" 
            type="text" 
            placeholder="Find a post" 
            onChange={props.handleSearch}
            id="post"
          />
        </div>
        <div className="control">
          <a className="button is-info">
            Search
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;