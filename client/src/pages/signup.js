import React, { useState, useEffect } from "react";
import {SignupForm} from "../components/Forms";
import API from "../utils/API";

function Users() {

  const [users, setUsers] = useState([]);
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadUsers()
  }, [])

  function loadUsers() {
    API.getBooks()
      .then(res => 
        setUsers(res.data)
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };
  
  function handleFormSubmit(event) {
    event.preventdefault();
    if (formObject.email && formObject.password) {
      API.saveUser({
        email: formObject.email,
        password: formObject.password
      })
        .then(res => loadUsers())
        .catch(err => console.log(err))
    }
  }
}

function Signup() {
  return (
    <div>
      <h1>Create Account</h1>
      <SignupForm 
      disabled={!(formObject.email && formObject.password)}
      onClick={handleFormSubmit} />
    </div>
  );
}

export default Signup;