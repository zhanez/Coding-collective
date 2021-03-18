import React from "react";
import {LoginForm} from "../components/Forms";
// import background from "../images/keyboard.jpg";

function Login() {
  return (
    <div>
      <h1 className="glow">Sign in</h1>
      <div className="container">
      <LoginForm />
      </div>
    </div>
  );
}

export default Login;