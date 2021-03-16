import React from "react";

export function Container(props) {
  return(
    <div className="container is-widescreen mt-5" style={{ width: 2000 }}>{props.children}</div>
  );
}

export function Columns(props) {
    return (
        <div className="columns is-desktop">{props.children}</div>
    );
}