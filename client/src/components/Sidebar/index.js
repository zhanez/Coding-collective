/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Sidebar() {
  return (
    <aside className="menu">
      <ul className="menu-list">
        <li>
          <a>My Classmates</a>
          <ul>
            <li><a>Zhane Zabala</a></li>
            <li><a>Ellie Fu</a></li>
            <li><a>Marco Oseguera</a></li>
            <li><a>Yuwen Yu</a></li>
            <li><a>Chetan Sekhon</a></li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;