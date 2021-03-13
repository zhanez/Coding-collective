import React from "react";
import {SignupForm} from "../components/Forms";
import API from "../utils/API";

// function Users() {
//   const [users, setUsers] = useState([])
//   const [formObject, setFormObject] = useState({})

//   useEffect(() => {
//     loadUsers()
//   }, [])

//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
//   };

//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.email && formObject.password) {
//       API.saveUser({
//         email: formObject.email,
//         password: formObject.password
//       })
//       .catch(err => console.log(err))
//     }
//   };
// }

function Signup() {
  return (
    <div>
      <h1>Create Account</h1>
      <SignupForm />
    </div>
  );
}

export default Signup;