/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function PostInput() {
  return (
    <div className="column is-three-quarters">
      <h1 className="glow">Community Newsfeed</h1>
      <h2>Start your Post Here!</h2>

      {/* <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Category</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <div className="select is-fullwidth">
                <select>
                  <option>Business development</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Subject</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="e.g. Partnership opportunity" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">User Name</label>
        </div>
          <div className="field-body">
            <div className="field">
            <div className="control">
                <textarea className="textarea" placeholder=""></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
            {/* <!-- Left empty for spacing --> */}
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button className="button is-primary">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostInput;