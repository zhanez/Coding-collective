import React from "react";
import {SignupForm} from "../components/Forms";
// import background from "../images/pineapple.jpg";

function Signup() {
  return (
    // <div style={{backgroundImage:`url(${background})`}} >
      <div className="collective">
      <h1 className="glow">Create Account</h1>
      <div className="container">
      <SignupForm />
      </div>
    </div>
  );
}

export default Signup;