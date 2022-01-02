import React, { Component } from "react";
import "../styles/experience.css";
import add from "../images/addComponent.png";
import SkillsComponent from "./sub-components/SkillsComponent";
import AddComponentButton from "./addComponentButton";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      components: ["skills"],
    };
  }

  _addComponent = (e) => {
    this.setState({
      components: this.state.components.concat("sample component"),
    });
  };

  render() {
    return (
      <div className="skills-container">
        <h3 className="skill-header">
          Skills
          {!this.props.complete ? (
            <AddComponentButton
              click={this._addComponent}
              class="add-component-button"
            />
          ) : null}
        </h3>
        <div className="skills-component-container">
          {this.state.components.map((elem) => (
            <SkillsComponent complete={this.props.complete} />
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;
