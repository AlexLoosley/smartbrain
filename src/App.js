import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import ImageLink from "./Components/ImageLink/ImageLink";
import Rank from "./Components/Rank/Rank";
import Particles from "react-particles-js";
import "./App.css";

const particlesOption = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends Component {
  render() {
    return (
      <div classname="App">
        <Particles className="particles" params={particlesOption} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLink />
        {/* { 
        <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
