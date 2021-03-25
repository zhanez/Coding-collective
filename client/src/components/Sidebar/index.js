/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";

function Sidebar() {
  const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUsers()
    }, [])

    function loadUsers() {
        API.getallUsers()
            .then(res => {
                setUsers(res.data)
            }).catch(err => {
              console.log(err)
            });
    };    

    console.log('user state:', users)

  return (
    <aside className="menu">
      <p class="menu-label">
        My Colleagues:
      </p>
      <ul class="menu-list">
        {users.map(user => <li><a href="/classmate">{user.firstName} {user.lastName}</a></li>)}
      </ul>

      <p class="menu-label">
        Find Posts by Category:
      </p>
      <ul class="menu-list">
        <li><a>Coding Issues</a></li>
        <li><a>Share Content</a></li>
        <li><a>Other</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;