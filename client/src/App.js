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
import GuestRoute from "./components/auth/GuestRoute";
import PrivateRoute from "./components/auth/PrivateRoute"
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ClassmateProfile from "./pages/Classmate";

function App() {

  useAuthTokenStore();

  return (
    <BrowserRouter basename='/'>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <GuestRoute exact path="/login" redirectTo="/community" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <PrivateRoute exact path="/community" redirectTo="/login" component={Community} />
          <PrivateRoute exact path="/profile" redirectTo="/login" component={Profile} />
          <PrivateRoute exact path="/classmate" component={ClassmateProfile} />
          <Route exact path="/about" component={About} />
        </Wrapper>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


