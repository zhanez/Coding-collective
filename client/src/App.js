import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <BrowserRouter basename='/'>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Wrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;


