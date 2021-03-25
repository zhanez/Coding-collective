import React from "react";
import Hero from "../components/Hero";
import bgImage from "../images/homehero.jpg"
import { Link } from "react-router-dom";

function Home() {
  return(
    <div>
      <Hero backgroundImage={bgImage}>
        <h1>CODING COLLECTIVE</h1>
        <h2>Where graduated UW bootcamp colleagues can connect</h2>
        <Link to="/signup">
          <button class="button is-primary is-large">Get Started!</button>
        </Link>
      </Hero>
    </div>
  );
}

export default Home;