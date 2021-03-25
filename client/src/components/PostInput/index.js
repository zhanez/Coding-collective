/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

function PostInput(props) {
  return (
    <form className="postInput">
      <h2 className="title ">Start your post here:</h2>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Category</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <div className="select is-fullwidth">
                <select name="category" onChange={props.handleCategory} {...props}>
                  <option></option>
                  <option>Share Content</option>
                  <option>Coding Issues</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label ">Subject</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input 
                className="input" 
                type="text" 
                name="title"
                placeholder="e.g. Share my projects"
                onChange={props.handleTitle} 
                {...props} 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label class="label">Content    </label>
        </div>
          <div className="field-body">
            <div className="field">
            <div className="control">
                <textarea 
                  className="textarea" 
                  placeholder="Start Something Here" 
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
    </form>
  );
}

export default PostInput;