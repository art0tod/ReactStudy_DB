import React, { Component } from "react";

import './ErrorBtn.css'

export default class ErrorBtn extends Component {

  state = {
    renderError: false
  };

  render() {

    if (this.state.renderError) {
      this.foo.bar = 0;
    }
    return (
      <button
      className={'ErrorBtn'}
      onClick={() => this.setState({renderError: true})}>
        Throw error
      </button>
    );
  }
}