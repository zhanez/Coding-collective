import React, { useEffect } from "react";
import {SignupForm} from "../components/Forms";
import API from "../utils/API";

function SignupPage() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {

    API 
      .getUsers()
      .then (({ data }) => {
        setUsers(data);
      });
  }, [setUsers]);

  console.log(users);

}

function Signup() {
  return (
    <div>
      <h1>Create Account</h1>
      <SignupForm />
    </div>
  );
}

export default Signup;