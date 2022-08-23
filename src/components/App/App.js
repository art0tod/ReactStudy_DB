import React, { Component } from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBtn from "../ErrorBtn";

import './App.css'
import ErrorIndicator from "../ErrorIndicator";
import PeoplePage from "../PeoplePage";
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";
import SwapiService from "../../services/SwapiService";

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
      <div className={'App'}>
        <Header/>
        <ErrorBtn/>
        <RandomPlanet/>
        <PeoplePage/>
        <div className={'row'}>
          <div className={'col'}>
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={(item) => item.name}/>
          </div>
          <div className={'col'}>
            <ItemDetails personId={this.state.selectedPerson}/>
          </div>
        </div>

        <div className={'row'}>
          <div className={'col'}>
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={(item) => item.name}/>
          </div>
          <div className={'col'}>
            <ItemDetails personId={this.state.selectedPerson}/>
          </div>
        </div>
      </div>

    );
  };
};