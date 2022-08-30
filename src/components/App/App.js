import React, { Component } from "react";

import Header from "../Header";

import './App.css'
import ErrorIndicator from "../ErrorIndicator";
import ErrorBoundry from "../ErrorBoundry";
import {PeoplePage, StarshipsPage, PlanetsPage} from "../Pages";

import { SwapiServiceProvider } from "../SwapiServiceContext";

import SwapiService from "../../services/SwapiService";
import DummySwapiService from "../../services/dummy-swapi-service";
import RandomPlanet from "../RandomPlanet";

export default class App extends Component {
  state = {
    hasError: false,
    swapiService: new SwapiService()
  };

  componentDidCatch(error, errorInfo) {
    console.log('didcatch');
    this.setState({
      hasError: true,
    })
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
        DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    })
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <div className={'App'}>
            <Header onServiceChange={this.onServiceChange}/>
            <RandomPlanet/>
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};