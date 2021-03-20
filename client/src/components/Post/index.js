import React from "react";
import "./style.css";

function Post() {
  return (
    <article className=" mt-6 message" style={{width: 770}}>
      <div className="message-header">
        <p>Hello World</p>
        {/* <button className="delete" aria-label="delete"></button> */}
      </div>
      <div className="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </div>
    </article>
  );
}

export default Post;