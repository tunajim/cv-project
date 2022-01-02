import { loremIpsum } from "lorem-ipsum";
import React, { Component } from "react";
import "../../styles/experience.css";
import Lorem from "../Lorem";
import remove from "../../images/remove.png";
import { render } from "@testing-library/react";
import WorkComponentClickable from "./WorkComponentClickable";

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
    return (
      <WorkComponentClickable
        _handleClick={this._handleDoubleClick}
        title="Junior Front End Developer"
        company="linkedIn"
        date="01/01/2019 - 04/20/2020"
        complete={this.props.complete}
      />
    );
  }
}

export default WorkExperienceComponent;
