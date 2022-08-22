import React, { Component } from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBtn from "../ErrorBtn";

import './App.css'
import ErrorIndicator from "../ErrorIndicator";
import PeoplePage from "../PeoplePage";

export default class App extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    console.log('didcatch');
    this.setState({
      hasError: true,
    })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className={'App'}>
        <Header/>
        <ErrorBtn/>
        <RandomPlanet/>
        <PeoplePage/>
        <PeoplePage/>
        <PeoplePage/>
      </div>
    );
  };
};