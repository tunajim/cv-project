import "./App.css";
import "./styles/container.css";
import React, { Component } from "react";
import Header from "./components/header";
import PersonalInfo from "./components/personal-info";
import ContactBar from "./components/ContactBar";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Education from "./components/Education";

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
          <ContactBar />
          <div className="experience-container">
            <WorkExperience />
            <Skills />
            <Education />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
