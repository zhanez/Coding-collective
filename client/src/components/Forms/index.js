import React, { useRef } from "react";
// import { pass } from "../../../../config/jwtPassportStrategy";
import api from "../../utils/api";
import {useLogin} from "../../utils/auth";

export function SignupForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  // Get the helper login function from the `useLogin` hook.
  const login = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      // Register the user.
      await api.register({ email, password });

      // User has been successfully registered, now log them in with the same information.
      await login({ email, password });

      // User has been successfully registered, logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
    } catch (err) {
      // Handle error responses from the API. This will include
      if (err.response && err.response.data) console.log(err.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} class="box column is-three-fifths is-offset-one-fifth ">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="e.g. alex@example.com"
            ref={emailRef}
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" ref={passwordRef} placeholder="********" />
        </div>
      </div>

      <button id="button" class="button is-primary">
        Sign Up
      </button>
    </form>
  );
}

export function LoginForm() {
  return (
    <div className="columns">
      <form class="box column is-three-fifths is-offset-one-fifth mt-5">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="e.g. alex@example.com"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="********" />
          </div>
        </div>
        <div class="buttons is-center">
          <button id="button" class="button is-primary is-hovered ">
            Login
          </button>
          <button id="button" class="button is-primary is-hovered">
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
}
