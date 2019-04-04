import React, { Component } from "react";
// import Remarkable from "remarkable";
// let md = new Remarkable();

export default class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Hello, **World**!"
    };
  }
  handleChange = e => {
    this.setState({ value: e });
  };
  render() {
    return (
      <div className="MarkdownEditor">
        <h2>Input</h2>
        <h3>Enter some markdown</h3>
        <textarea
          rows="4"
          cols="60"
          defaultValue={this.state.value}
          onChange={e => this.handleChange(e.target.value)}
        />
        <h2>Output</h2>
        <p className="output" />
      </div>
    );
  }
}
