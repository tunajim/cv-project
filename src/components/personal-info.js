import React, { Component } from "react";
import PersonalInfoComponent from "./sub-components/Personal-info-component.js";
import Lorem from "./Lorem.js";
import "../styles/personal-info.css";


export default class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: { text: "" },
      last: { text: "" },
      submitted: false,
    };
  }

  render() {
    return (
      <div id="personal-info">
        <PersonalInfoComponent type="name" placeHolder="Jane Doe" elemType="h1" />
        <PersonalInfoComponent type="title" placeHolder="Front End Web Developer" elemType="h2" />
        <PersonalInfoComponent type="description" placeHolder={Lorem.generateParagraphs(1)} elemType="p" />
      </div>
    );
  }
}
