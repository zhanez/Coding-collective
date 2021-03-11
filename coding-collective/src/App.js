// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Profile from "../models/Profile";
// import react dom

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Profile} />
        </Wrapper> 
        <Footer />
      </div>
    </Router>
  );
}
export default App;
