import React from "react";
import {SignupForm} from "../components/Forms";

function Signup() {
  return (
    <div className="pb-6">
      <h1 className="glow">Create Account</h1>
      <div className="container">
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;
