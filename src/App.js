import "./App.css";
import React, { Component } from "react";
import navigation from "./Components/Navigation/navigation";

class App extends Component {
  render() {
    return (
      <div classname="App">
        <navigation />
        {/* { <Logo />
        <ImageLink />
        <FaceRecognition />} */}
      </div>
    );
  }
}

export default App;
