import React, { Component } from "react";
import remove from "../../images/remove.png";
import Lorem from "../Lorem";
import "../../styles/experience.css";
import Info from "./Info";
import WorkBullets from "./WorkBullets";

class WorkComponentClickable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      title: this.props.title,
      company: this.props.company,
      date: this.props.date,
    };
  }

  _handleDoubleClick = (e) => {
    this.setState({
      clicked: true,
    });
  };

  _handleClick = (e) => {
    e.target.parentNode.remove();
  };

  render() {
    const complete = this.props.complete;
    return (
      <div className="work-experience-component-container">
        {!complete ? (
          <img
            src={remove}
            className="remove-button"
            onClick={this._handleClick}
            alt="remove"
          ></img>
        ) : null}
        <Info
          tag="h4"
          info={this.state.title}
          complete={this.props.complete}
        />
        <Info
          tag="h5"
          info={this.state.company}
          complete={this.props.complete}
        />
        <Info
          tag="h6"
          info={this.state.date}
          complete={this.props.complete}
        />
        <WorkBullets
          defaultEntry={Lorem.generateSentences(1)}
          complete={this.props.complete}
        />
      </div>
    );
  }
}

export default WorkComponentClickable;
