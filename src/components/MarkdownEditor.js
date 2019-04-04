import React, { Component } from "react";

export default class MarkdownEditor extends Component {
  render() {
    return (
      <div className="MarkdownEditor">
        <h2>Input</h2>
        <h3>Enter some markdown</h3>
        <textarea rows="4" cols="60" />
        <h2>Output</h2>
        <p className="output" />
      </div>
    );
  }
}
