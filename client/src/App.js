import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import About from "./pages/About";
import { useAuthTokenStore } from "./utils/auth";

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

  useAuthTokenStore();

  return (
    <BrowserRouter basename='/'>
      <div>
        <Navbar />
        <Wrapper>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/about" component={About} />
        </Wrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;


