import React from "react";
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

function App() {
  const isDone = useAuthTokenStore();

  return (
    <BrowserRouter basename='/'>
      <div>
        <Navbar />
        {isDone && <Wrapper>
          <Route exact path="/" component={Home} />
          <GuestRoute exact path="/login" redirectTo="/community" component={Login} />
          <GuestRoute exact path="/signup" redirectTo="/community" component={Signup} />
          <PrivateRoute exact path="/community" redirectTo="/login" component={Community} />
          <PrivateRoute exact path="/profile/:id" redirectTo="/login" component={Profile}/>
          <Route exact path="/about" component={About} />
        </Wrapper>}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


