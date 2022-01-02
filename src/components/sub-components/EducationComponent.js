import React, { Component } from "react";
import "../../styles/experience.css";
import RemoveButton from "./RemoveButton";
import Info from "./Info";

class EducationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subject: "Computer Science",
      school: "Portland Community College",
      dates: "01/02/2019-04/05/2020",
    };
  }

  _remove = (e) => {
    e.target.parentNode.remove();
  };

  render() {
    return (
      <div className="education-component">
        {!this.props.complete ? (
          <RemoveButton
            click={this._remove}
            alt="remove"
            class="remove-button"
          />
        ) : null}
        <Info
          tag="h4"
          info={this.state.subject}
          complete={this.props.complete}
        />
        <Info
          tag="h5"
          info={this.state.school}
          complete={this.props.complete}
        />
        <Info
          tag="h6"
          info={this.state.dates}
          complete={this.props.complete}
        />
      </div>
    );
  }
}

export default EducationComponent;
