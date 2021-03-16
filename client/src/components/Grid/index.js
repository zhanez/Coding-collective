import React from "react";

function Columns(props) {
    return (
        <div className="columns is-mobile">{props.children}</div>
    );
}

export default Columns;