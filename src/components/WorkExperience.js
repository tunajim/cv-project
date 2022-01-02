import { render } from "@testing-library/react";
import React, { Component } from "react";
import "../styles/experience.css";
import WorkExperienceComponent from "./sub-components/WorkExperienceComponent";
import add from "../images/addComponent.png";
import AddComponentButton from "./addComponentButton";

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
  };

  render() {
    console.log(this.props.complete);
    return (
      <div className="work-experience-container">
        <h3 className="work-experience-header">
          Work Experience
          {!this.props.complete ? (
            <AddComponentButton
              click={this.addComponent}
              class="add-component-button"
            />
          ) : null}
        </h3>
        {this.state.components.map((elem) => (
          <WorkExperienceComponent complete={this.props.complete} />
        ))}
      </div>
    );
  }
}

export default WorkExperience;
