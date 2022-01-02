import React, { Component } from "react";
import "../styles/experience.css";
import AddComponentButton from "./addComponentButton";
import EducationComponent from "./sub-components/EducationComponent";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      components: ["Education"],
    };
  }

  _addComponent = (e) => {
    this.setState({
      components: this.state.components.concat("Education Component"),
    });
  };

  render() {
    return (
      <div className="education-container">
        <h3 className="education-header">
          Education
          {!this.props.complete ? (
            <AddComponentButton
              click={this._addComponent}
              class="add-component-button"
            />
          ) : null}
        </h3>
        <div className="education-component-container">
          {this.state.components.map((elem) => (
            <EducationComponent complete={this.props.complete} />
          ))}
        </div>
      </div>
    );
  }
}

export default Education;
