import React, { Component } from "react";

import Header from "../Header";

import './App.css'
import ErrorIndicator from "../ErrorIndicator";
import ErrorBoundry from "../ErrorBoundry";

import { SwapiServiceProvider } from "../SwapiServiceContext";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  StarshipDetails,
  PlanetDetails
} from "../SWComponents";
import SwapiService from "../../services/SwapiService";
// import DummySwapiService from "../../services/dummy-swapi-service";

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
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
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService} >
          <div className={'App'}>
            <Header/>

            <PersonDetails itemId={11}/>
            <PlanetDetails itemId={5}/>
            <StarshipDetails itemId={5}/>

            <PersonList/>
            <StarshipList/>
            <PlanetList/>

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};