import "./App.css";
import "./styles/container.css"
import React, { Component } from "react";
import Header from "./components/header";
import PersonalInfo from "./components/personal-info"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="App">
      <Header />
      <div id="cv-container">
        <PersonalInfo />
      </div>
    </div>
    );
  }
}

export default App;
