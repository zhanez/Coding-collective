/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function PostInput() {
  return (
    <div className="column is-three-quarters">
      <h2>Start your Post Here!</h2>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Category</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <select>
                  <option>Business development</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Subject</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input" type="text" placeholder="e.g. Partnership opportunity" />
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Content</label>
        </div>
          <div class="field-body">
            <div class="field">
            <div class="control">
                <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label">
            {/* <!-- Left empty for spacing --> */}
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostInput;