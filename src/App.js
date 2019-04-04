import React, { Component } from "react";
import "./App.css";
import Logo from "./components/Logo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
        </header>
      </div>
    );
  }
}

export default App;
