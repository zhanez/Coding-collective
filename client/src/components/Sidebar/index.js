/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Sidebar() {
  return (
    <div className="column is-one-quarter">
    <aside className="menu">
      <ul className="menu-list">
        <li><a>My Profile</a></li>
        <li><a>My Classmates</a>
          <ul>
            <li><a>Zhane Zabala</a></li>
            <li><a>Marco Oseguera</a></li>
            <li><a>Yuwen Yu</a></li>
            <li><a>Chetan Sekhon</a></li>
            <li><a>Ellie Fu</a></li>
          </ul>
        </li>
      </ul>
    </aside>
    </div>
  );
}

export default Sidebar;