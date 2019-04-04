import React, { Component } from "react";

export default class MarkdownEditor extends Component {
  render() {
    return (
      <div>
        <h2>Input</h2>
        <h3>Enter some markdown</h3>
        <textarea value="Hello, **World**!" />
        <h2>Output</h2>
        <p />
      </div>
    );
  }
}
