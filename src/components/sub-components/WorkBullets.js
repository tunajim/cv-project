import React, { Component } from "react";
import Lorem from "../Lorem";
import WorkListItem from "./WorkListItem";

class WorkBullets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [Lorem.generateSentences(1)],
      default: this.props.defaultEntry,
    };
  }

  updateArr = (e) => {
    this.setState({
      arr: ([e.target.dataset.index] = e.target.value),
    });
  };

  _generateBullet = (e) => {
    this.setState({
      arr: this.state.arr.concat(Lorem.generateSentences(1)),
    });
  };

  _toggleClick = (e) => {
    this.setState({
      clicked: true,
    });
  };

  render() {
    let items = this.state.arr.map((object, i) => {
      console.log(object);
      console.log(this.state.complete);
      return (
        <WorkListItem
          index={i}
          object={object}
          complete={this.props.complete}
        />
      );
    });
    return (
      <div>
        <ul>{items}</ul>
        {!this.props.complete ? (
          <button onClick={this._generateBullet}>Add</button>
        ) : null}
      </div>
      // <ul{>
      //   {/* <WorkListItem info={Lorem.generateSentences(1)}/> */}
      //   {this._renderList()}
      //   <li>{Lorem.generateSentences(1)}</li>
      //   <li>{Lorem.generateSentences(1)}</li>
      //   <li>{Lorem.generateSentences(1)}</li>
      // </ul}>;
    );
  }
}

export default WorkBullets;
