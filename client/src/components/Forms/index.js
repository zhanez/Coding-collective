import React, {useRef} from "react";
// import { pass } from "../../../../config/jwtPassportStrategy";

export function SignupForm() {
  return (
    <form  class="box">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input"  type="email" placeholder="e.g. alex@example.com" />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="********" />
        </div>
      </div>

      <button class="button is-primary">Sign Up</button>
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
            <input class="input" type="email" placeholder="e.g. alex@example.com" />
          </div>
        </div>
  
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="********" />
          </div>
        </div>
  
        <button class="button is-primary">Login</button>
        <button class="button is-primary pl-5">Go Back</button>
      </form>
      </div>
    );
  }