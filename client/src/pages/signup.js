import React from "react";
import {SignupForm} from "../components/Forms";

function Signup() {
  return (
    <div>
      <h1 className="glow">Create Account</h1>
      <div className="container">
      <SignupForm />
      </div>
    </div>
  );
}

export default Signup;