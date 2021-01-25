import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div classname="App">
        <Navigation />
        <Logo />
        {/* { 
        <ImageLink />
        <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
