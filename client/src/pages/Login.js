import React from "react";
import {LoginForm} from "../components/Forms";


function Login() {
  return (
    <div className="log-in">
      <h1 className="glow">Sign in</h1>
      <div className="container">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
