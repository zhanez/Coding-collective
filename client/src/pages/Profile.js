import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Profile() {
  const [user, setUser] = useState([]);
  // const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadUser()
  }, [])

  function loadUser() {
    API.loadUsers()
      .then(res => {
        console.log(res.data)
        setUser(res.data)
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="mt-5 mb-5 container">
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            <p className="title">{user.firstName} {user.lastName}</p>
            <form action="/profile" method="post" enctype="multipart/form-data">
              <input type="file" name="avatar" />
              <input type="hidden" name="userId" value ={user._id}/>
              <input type="submit"/>
            </form>
            {console.log(`"/uploadImages/${user.profilePic}"`)}
            <img src={user.profilePic? `/uploadImages/${user.profilePic}` :"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"} alt="user-profile-img"/>  
          </div>
        
          <div className="tile is-child box">
            <p className="title">Contact</p>
            <div className="columns">
              <div className="column">
                <a href={user.linkedinURL}><i className="fab fa-linkedin-in iconSize"></i></a>
              </div>
              <div className="column">
                <a href={user.githubURL}><i className="fab fa-github iconSize"></i></a>
              </div>
              <div className="column">
                <a href={user.instagramURL}><i className="fab fa-instagram iconSize"></i></a>
              </div>
              <div className="column">
                <a href={user.facebookURL}><i className="fab fa-facebook-f iconSize"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title">About Me</p>
            <p>{user.intro}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;