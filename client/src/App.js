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
<<<<<<< HEAD
import ClassmateProfile from "./pages/Classmate";
=======
>>>>>>> e5c65c5b8d1de072c6ba795eac2631d0dc9d25f2

function App() {

  useAuthTokenStore();

  return (
    <BrowserRouter basename='/'>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <GuestRoute exact path="/login" redirectTo="/community" component={Login} />
          <GuestRoute exact path="/signup" redirectTo="/community" component={Signup} />
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


