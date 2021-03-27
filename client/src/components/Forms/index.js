import React, { useRef } from "react";
// import { pass } from "../../../../config/jwtPassportStrategy";
import api from "../../utils/API";
import { useLogin } from "../../utils/auth";
import { Link } from "react-router-dom";

export function SignupForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const githubURLRef = useRef();
  const linkedinURLRef = useRef();
  const facebookURLRef = useRef();
  const instagramURLRef = useRef();

  // Get the helper login function from the `useLogin` hook.
  const login = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstName = firstnameRef.current.value;
    const lastName = lastnameRef.current.value;
    const githubURL = githubURLRef.current.value;
    const linkedinURL = linkedinURLRef.current.value;
    const facebookURL = facebookURLRef.current.value;
    const instagramURL = instagramURLRef.current.value;

    try {
      // Register the user.
      await api.register({ email, password, firstName, lastName, githubURL, linkedinURL, facebookURL, instagramURL });

      // User has been successfully registered, now log them in with the same information.
      await login({ email, password });

      // User has been successfully registered, logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
    } catch (err) {
      // Handle error responses from the API. This will include
      if (err.response && err.response.data) console.log(err.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="box column is-three-fifths is-offset-one-fifth ">
      <div className="field-group">
 <div className="field is-inline-block-desktop column is-half">
  <label className="label">First Name</label>
  <div className="control">
   <input className="input" ref={firstnameRef} type="text" placeholder="e.g Alex"/>
  </div>
 </div>

<div className="field is-inline-block-desktop column is-half ">
 <label className="label">Last Name</label>
 <div className="control">
  <input className="input" ref={lastnameRef} type="text" placeholder="e.g Smith" />
 </div>
 </div>
</div>
      
      <div className="field is-inline-block-desktop column is-half">
        <label className="label">Email</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="e.g. alex@example.com"
            ref={emailRef}
          />
        </div>
      </div>

      <div className="field is-inline-block-desktop column is-half">
        <label className="label">Password</label>
        <div className="control">
          <input className="input" type="password" ref={passwordRef} placeholder="********" />
        </div>
      </div>
      <label className="label">Bio</label>
      <textarea class="textarea" placeholder="Tell Us About You"></textarea>

      <div className="field">
        <label className="label">Github URL</label>
        <div className="control">
          <input className="input" type="URL" ref={githubURLRef} placeholder="Github" />
        </div>
      </div>

      <div className="field">
        <label className="label">Linkedin URL</label>
        <div className="control">
          <input className="input" type="URL" ref={linkedinURLRef} placeholder="Linkedin" />
        </div>
      </div>

      <div className="field">
        <label className="label">Facebook URL</label>
        <div className="control">
          <input className="input" type="URL" ref={facebookURLRef} placeholder="Facebook" />
        </div>
      </div>

      <div className="field">
        <label className="label">Instagram URL</label>
        <div className="control">
          <input className="input" type="URL" ref={instagramURLRef} placeholder="Instagram" />
        </div>
      </div>

      <div className="buttons is-center">
        <button id="button" className="button is-primary is-hovered" to="/community">Sign Up</button>
      </div>

      <div className="field has-text-centered">
        <Link to="/login">
          Already have an account? Go Sign in!
        </Link>
      </div>
    </form>
  );
}

export function LoginForm() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const login = useLogin();

  const handleSubmit = async e => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {

      await login({ email, password });
      
    } catch(err) {
      
      if(err.response && err.response.data) console.log(err.response.data);

    }
  }

  return (
    <div className="columns">
      <form onSubmit={handleSubmit} className="box column is-three-fifths is-offset-one-fifth mt-5">
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. alex@example.com"
              ref={emailRef}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" ref={passwordRef} placeholder="********" />
          </div>
        </div>
        <div className="buttons is-center">
          <button id="button" className="button is-primary is-hovered" to="/community">
            Login
          </button>
          
          <button id="button" className="button is-primary is-hovered">
            <Link style={{color: "white"}} to="/">
              Go Back
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}
