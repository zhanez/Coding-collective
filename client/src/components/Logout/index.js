import React, { Component } from 'react'
export default class UserLogout extends Component {

 logout = () => {
    localStorage.clear();
    // you can also like localStorage.removeItem('Token');
    console.log("logout method call");
    window.location.href = "/login";
  }

  render() {
    return (
      <button onClick={this.logout}>Logout</button>
    );
  }
}



