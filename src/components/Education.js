import React, { Component } from "react";

class Education extends Component {
    constructor(props){
        super(props);

        this.state = {
            components: ["Education"],
        }
    }

    render() {
        return (
            <div className="education-container">
                <h3>Education</h3>
            </div>
        )
    }
}

export default Education;