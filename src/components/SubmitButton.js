import React, { Component } from "react";

class SubmitButton extends Component {
  constructor(props) {
    super(props);
  }

  _clicked = () => {
    this.props.clicked();
  };

  render() {
    return (() => {
      return (
        <button className="submit-cv" onClick={this._clicked}>
          {this.props.type}
        </button>
      );
    })();
  }
}

export default SubmitButton;
