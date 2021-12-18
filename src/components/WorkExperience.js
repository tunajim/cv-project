import { render } from "@testing-library/react";
import React, { Component } from "react";
import "../styles/experience.css";

class WorkExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      components: ["work experience"],
    };
  }

  addComponent = (e) => {
    this.setState({
      components: this.state.components.concat("sample component"),
    });
  }

  render() {
    return (
      <div className="work-experience-container">
        <h3>Work Experience</h3>
        {this.state.components.map((elem) => (
          <p>{elem}hello world</p>
        ))}
        <button onClick={this.addComponent}>Add Component</button>
      </div>
    );
  }
}

export default WorkExperience;
