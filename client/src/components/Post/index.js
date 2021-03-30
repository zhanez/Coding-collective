import React from "react";
import "./style.css";

function Post(props) {
  const { posts } = props;
  console.log(posts);

  return (
    <div className="pr-6 mt-6">
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <article className=" mt-6 message">
              <div className="message-header" >
                <p>From: {post.user}</p>
                <span className="tag is-warning is-light">{post.category}</span>
              </div>

              <div className="message-header">
                <p className="post-title">{post.title}</p>
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