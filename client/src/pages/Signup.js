import React, {useState, useEffect} from "react";
import {SignupForm} from "../components/Forms";
import api from "../utils/api";

function Signup() {
  const [users, setUsers] = useState([])
  const [formObject, setFormObject] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    loadUsers()
  }, [])

  function loadUsers() {
    api.getUsers()
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
    event.preventDefault();
    if (formObject.email && formObject.password) {
      api.saveUser({
        email: formObject.email,
        password: formObject.password,
        
      })
        .then(() => setFormObject({
          user: "",
          password: ""
        }))
        .then(() => loadUsers())
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <h1 className="glow">Create Account</h1>
      <div className="container">
      <SignupForm 
      onChange ={handleInputChange}
      value={formObject.email && formObject.password}
      onSubmit ={handleFormSubmit}
      />
      </div>
    </div>
  );
}

export default Signup;
