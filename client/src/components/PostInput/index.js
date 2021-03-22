/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

function PostInput(props) {
  return (
    <div className="postInput">
      <h2 className="title is-3 has-text-white">Start your post here!</h2>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label has-text-white">Category</label>
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
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label has-text-white">Subject</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input 
                className="input" 
                type="text" 
                name="title"
                placeholder="e.g. Partnership opportunity"
                onChange={props.handleTitle} 
                {...props} 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label class="label has-text-white">Content</label>
        </div>
          <div className="field-body">
            <div className="field">
            <div className="control">
                <textarea 
                  className="textarea" 
                  placeholder="Explain how we can help you" 
                  name="content"
                  onChange={props.handleContent}
                  {...props}
                />
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
              <button className="button is-success" onClick={props.handleFormSubmit} {...props}>
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