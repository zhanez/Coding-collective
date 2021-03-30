import React, { useState, useEffect } from "react";
import API from "../utils/API";

function ClassmateProfile() {
  const [classmate, setClassmate] = useState([]);
  useEffect(() => {
    loadClassmate()
  }, [])

  function loadClassmate() {
    API.loadclassmate()
      .then(res => {
        console.log(res.data)
        setClassmate(res.data)
      }).catch(err => console.log(err));
  };    
    
  return (
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            <p className="title">{classmate.firstName} {classmate.lastName}</p>
            <form action="/profile" method="post" enctype="multipart/form-data">
              <input type="file" name="avatar" />
              <input type="submit"/>
            </form>
            <img src="/uploadImages/72046124.png" alt="classmate-profile-img"/>  
          </div>
          <div className="tile is-child box">
          <p className="title">Contact</p>
          <div className="columns">
            <div className="column">
              <a href={classmate.linkedinURL}><i className="fab fa-linkedin-in iconSize"></i></a>
            </div>
            <div className="column">
              <a href={classmate.githubURL}><i className="fab fa-github iconSize"></i></a>
            </div>
            <div className="column">
              <a href={classmate.instagramURL}><i className="fab fa-instagram iconSize"></i></a>
            </div>
            <div className="column">
              <a href={classmate.facebookURL}><i className="fab fa-facebook-f iconSize"></i></a>
            </div>
          </div>
        </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title">About Me</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassmateProfile;