import React, { Component } from "react";
import "../../styles/experience.css";

class WorkListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      index: this.props.index,
      value: this.props.object,
    };
  }

  _handleDoubleClick = (e) => {
    this.setState({
      clicked: true,
    });
  };

  _updateValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  _handleSubmit = (e) => {
    this.setState({
      clicked: false,
    });
  };

  _handleBlur = (e) => {
    this.setState({
      clicked: false,
    });
  };

  render() {
    return (() => {
      if (!this.props.complete) {
        if (!this.state.clicked) {
          return (
            <li
              className="list"
              data-index={this.state.index}
              onDoubleClick={this._handleDoubleClick}
            >
              {this.state.value}
            </li>
          );
        } else {
          return (
            <li>
              <form onSubmit={this._handleSubmit}>
                <input
                  className="input"
                  onChange={this._updateValue}
                  onBlur={this._handleBlur}
                  autoFocus
                ></input>
              </form>
            </li>
          );
        }
      } else {
        return (
          <li
            className="list"
            data-index={this.state.index}
          >
            {this.state.value}
          </li>
        );
      }
    })();
  }
}

export default WorkListItem;
