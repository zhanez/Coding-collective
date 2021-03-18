import React from "react";

export function SignupForm() {
  return (
    
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

      <div class="buttons is-center">
        <button id="button" class="button is-primary is-hovered">Sign Up</button>
        <button id="button" class="button is-primary is-hovered" to="/">Go Back</button>
      </div>
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
      <div class="buttons is-center">
        <button id="button" class="button is-primary is-hovered ">Login</button>
        <button id="button" class="button is-primary is-hovered" to="/">Go Back</button>
      </div>
      </form>
      </div>

    );
  }