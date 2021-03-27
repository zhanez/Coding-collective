import React from "react";
// import { Link } from "react-router-dom";

function About() {
  return (
    <div className= "container mb-5">
      <div className="card">
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">PROJECT DESCRIPTION:</p>
            <p className="subtitle is-6">
              We wanted create a mobile and web friendly application that could keep coding bootcamp 
              students connected even after graduating the program, so we could continue to share projects, 
              provide feedback, and learn from one another. Although our cohort has a Slack channel, 
              messages there are easily lost and consequently valuable resources, interesting projects, etc. 
              become inaccessible. We hope that the Coding Collective can serve as a central location for 
              our peers to stay in touch! Check out our repo here: 
              <a href="https://github.com/zhanez/Coding-collective/tree/e06ecfbf2401ee4cf43d47a89f706371c44141b4" target="_blank" rel="noreferrer">
                GitHub Repository
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">TEAM MEMBERS:</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">Zhane Zabala</p>
            <p className="subtitle is-6">Github: @zhanez</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">Marco Oseguera</p>
            <p className="subtitle is-6">Github: @Bejarano03</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">Yuwen Yu</p>
            <p className="subtitle is-6">Github: @ywen26</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">Chetan Sekhon</p>
            <p className="subtitle is-6">Github: @Chetansekhon</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">Ellie Fu-Hinthorn</p>
            <p className="subtitle is-6">Github: @elliefh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default About;