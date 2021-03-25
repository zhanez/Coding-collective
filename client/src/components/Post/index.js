import React from "react";
import "./style.css";

function Post(props) {
  const { posts } = props;
  return (
    <div className="pr-6">
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <article className=" mt-5 message">
              <div className="message-header" >
                <p>{post.title}</p>
                <span class="tag is-warning is-light">{post.category}</span>
              </div>
              <div className="message-body">
                {post.content}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;