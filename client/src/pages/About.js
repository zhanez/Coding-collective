import React from "react";

function About() {
  return (
    <div className= "container mb-5 mt-5 about">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title is-4">PROJECT DESCRIPTION:</p>
            <p className="subtitle is-6 description">
              We wanted create a mobile and web friendly application that could keep coding bootcamp 
              students connected even after graduating the program, so we could continue to share projects, 
              provide feedback, and learn from one another. Although our cohort has a Slack channel, 
              messages there are easily lost and consequently valuable resources, interesting projects, etc. 
              become inaccessible. We hope that the Coding Collective can serve as a central location for 
              our peers to stay in touch! 
            </p>
            <p className="subtitle is-6">
            Check out our repo here: <a href="https://github.com/zhanez/Coding-collective" target="_blank" rel="noreferrer">GitHub Repository</a>
            </p>
          </div>
        </div>

        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            <p className="title is-4">TEAM MEMBERS:</p> 
          </div>
          <div className="tile is-child box">
            <p className="title is-4">Zhane Zabala</p>
            <p className="subtitle is-6">Github: <a href="https://github.com/zhanez" target="_blank" rel="noreferrer">@zhanez</a></p>
          </div>
          <div className="tile is-child box">
            <p className="title is-4">Marco Oseguera</p>
            <p className="subtitle is-6">Github: <a href="https://github.com/Bejarano03" target="_blank" rel="noreferrer">@Bejarano03</a></p>
          </div>
          <div className="tile is-child box">          
            <p className="title is-4">Yuwen Yu</p>
            <p className="subtitle is-6">Github: <a href="https://github.com/ywen26" target="_blank" rel="noreferrer">@ywen26</a></p>              
          </div>
          <div className="tile is-child box">           
            <p className="title is-4">Chetan Sekhon</p>
            <p className="subtitle is-6">Github: <a href="https://github.com/Chetansekhon" target="_blank" rel="noreferrer">@Chetansekhon</a></p>           
          </div>
          <div className="tile is-child box">          
            <p className="title is-4">Ellie Fu-Hinthorn</p>
            <p className="subtitle is-6">Github: <a href="https://github.com/elliefh" target="_blank" rel="noreferrer">@elliefh</a></p>             
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default About;