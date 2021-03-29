import React from "react";
import "./style.css";

function Post(props) {
  const { posts } = props;
  console.log(posts);

  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   loadUser()
  // }, []);

  // function loadUser() {
  //   API.loadUsers()
  //     .then( res => {
  //       console.log(res.data)
  //       setUser(res.data)
  //     }).catch(err => console.log(err));
  // };

  return (
    <div className="pr-6 mt-6">
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <article className=" mt-6 message">

              <div className="message-header" >
                <p>{post.user}</p>
              </div>

              <div className="message-header">
                <p>{post.title}</p>
                <span className="tag is-warning is-light">{post.category}</span>
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