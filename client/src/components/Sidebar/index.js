/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

function Sidebar() {
  return (
    <aside className="menu">
      <p class="menu-label">
        My Classmates
      </p>
      <ul class="menu-list">
        <li><a>Zhane Zabala</a></li>
        <li><a>Ellie Fu</a></li>
        <li><a>Marco Oseguera</a></li>
        <li><a>Yuwen Yu</a></li>
        <li><a>Chetan Sekhon</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;