import { loremIpsum } from "lorem-ipsum";
import React, { Component } from "react";
import "../../styles/experience.css";
import Lorem from "../Lorem";
import remove from "../../images/remove.png";
import { render } from "@testing-library/react";

class WorkExperienceComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  _handleClick = (e) => {
    e.target.parentNode.parentNode.remove();
  };

  _handleDoubleClick = (e) => {
    console.log(e);
  };

  render() {
    return (() => {
      if (!this.props.complete) {
        return (
          <div className="work-experience-component-container">
            <h4 onDoubleClick={this._handleDoubleClick}>
              <img
                src={remove}
                className="remove-button"
                onClick={this._handleClick}
              ></img>
              Junior Front End Web Developer
            </h4>
            <h5>linkedIn</h5>
            <h6>01/01/2019 - 04/01/2020</h6>
            <ul>
              <li>{Lorem.generateSentences(1)}</li>
              <li>{Lorem.generateSentences(1)}</li>
              <li>{Lorem.generateSentences(1)}</li>
            </ul>
          </div>
        );
      } else {
        return (
          <div className="work-experience-component-container">
            <h4 onDoubleClick={this._handleDoubleClick}>
              Junior Front End Web Developer
            </h4>
            <h5>linkedIn</h5>
            <h6>01/01/2019 - 04/01/2020</h6>
            <ul>
              <li>{Lorem.generateSentences(1)}</li>
              <li>{Lorem.generateSentences(1)}</li>
              <li>{Lorem.generateSentences(1)}</li>
            </ul>
          </div>
        );
      }
    })();
  }
}

export default WorkExperienceComponent;
