import "./App.css";
import "./styles/container.css";
import React, { Component } from "react";
import Header from "./components/header";
import PersonalInfo from "./components/personal-info";
import ContactBar from "./components/ContactBar";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { render } from "@testing-library/react";
import SubmitButton from "./components/SubmitButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: false,
    };
  }

  _completeCV = () => {
    this.setState({
      complete: true,
    });
  };

  _editCV = () => {
    this.setState({
      complete: false,
    });
  };
  render() {
    console.log(this.state.complete);
    return (
      <div className="App">
        <Header />
        <div id="cv-container">
          <PersonalInfo complete={this.state.complete} />
          <ContactBar complete={this.state.complete} />
          <div className="experience-container">
            <div className="left-container">
              <WorkExperience complete={this.state.complete} />
            </div>
            <div className="right-container">
              <Skills complete={this.state.complete} />
              <Education complete={this.state.complete} />
            </div>
          </div>
          {!this.state.complete ? (
            <SubmitButton clicked={this._completeCV} type="Complete" />
          ) : (
            <SubmitButton clicked={this._editCV} type="Edit" />
          )}
        </div>
      </div>
    );
  }
}

export default App;
