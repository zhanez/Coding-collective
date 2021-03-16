import React, {useRef} from "react";
// import { pass } from "../../../../config/jwtPassportStrategy";

export function SignupForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  // Get the helper login function from the `useLogin` hook.
  const login = useLogin();

  const handleSubmit = async e => {
      e.preventDefault();

      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      try {

          // Register the user.
          await api.register({ email, password });

          // User has been successfully registered, now log them in with the same information.
          await login({ email, password });

          // User has been successfully registered, logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

      } catch(err) {

           // Handle error responses from the API. This will include
           if( err.response && err.response.data ) console.log(err.response.data);
           
      }
  }

  return (
    <form onSubmit={handleSubmit} class="box">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" ref={emailRef} type="email" placeholder="e.g. alex@example.com" />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" ref={passwordRef} type="password" placeholder="********" />
        </div>
      </div>

      <button class="button is-primary">Sign Up</button>
    </form>
  );
}

export function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  // Get the helper login function from the `useLogin` hook.
  const login = useLogin();

  const handleSubmit = async e => {
      e.preventDefault();

      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      try {

          await login({ email, password });

          // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

      } catch(err) {

           // Handle error responses from the API
           if( err.response && err.response.data ) console.log(err.response.data);

      }
  }
    return (
      <div className="columns">
      <form onSubmit={handleSubmit} class="box column is-three-fifths is-offset-one-fifth mt-5">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" ref={emailRef} type="email" placeholder="e.g. alex@example.com" />
          </div>
        </div>
  
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" ref={passwordRef} type="password" placeholder="********" />
          </div>
        </div>
  
        <button class="button is-primary">Login</button>
        <button class="button is-primary pl-5">Go Back</button>
      </form>
      </div>
    );
  }