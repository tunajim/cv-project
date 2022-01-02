import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      tag: this.props.tag,
      placeHolder: this.props.info,
      complete: this.props.complete,
    };
  }

  _handleDoubleClick = (e) => {
    this.setState({
      clicked: true,
    });
  };

  _handleInput = (e) => {
    this.setState({
      placeHolder: e.target.value,
    });
  };

  _handleSubmit = (e) => {
    this.setState({
      clicked: false,
    });
  };

  render() {
    return (() => {
      if (!this.props.complete) {
        if (!this.state.clicked) {
          return (
            <this.state.tag onDoubleClick={this._handleDoubleClick}>
              {this.state.placeHolder}
            </this.state.tag>
          );
        } else {
          return (
            <form onSubmit={this._handleSubmit}>
              <input
                className="input"
                onChange={this._handleInput}
                autoFocus
                onBlur={this._handleSubmit}
              ></input>
            </form>
          );
        }
      } else {
        return (
          <this.state.tag>
            {this.state.placeHolder}
          </this.state.tag>
        );
      }
    })();
  }
}

export default Info;
