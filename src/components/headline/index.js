import React, { Component } from "react";

export class Headline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, desc } = this.props;
    if (!header) {
      return null; // If do not have props then it returns null
    }
    return (
      <div data-test="headline-component">
        <h1 data-test="header">{header}</h1>
        <p data-test="desc">{desc}</p>
      </div>
    );
  }
}

export default Headline;
