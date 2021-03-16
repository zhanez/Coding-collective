import React from "react";
import {LoginForm} from "../components/Forms";
// import background from "../images/keyboard.jpg";

function Login() {
  return (
    // <div style={{backgroundImage:`url(${background})`}}>
     <div className="animation"> 
          <h1 className="glow">Sign in to your account</h1>
      <div className="container"> 
      <LoginForm />
      </div>
    </div>
  // </div>
  );
};

export default Login;