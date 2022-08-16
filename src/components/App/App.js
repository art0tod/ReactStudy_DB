import React, { Component } from "react";

import Header from "../Header";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import RandomPlanet from "../RandomPlanet";

import './App.css'

export default class App extends Component {

  state = {
    selectedPerson: 1
  };

  onPersonSelected = (id) => {
    this.setState({
       selectedPerson: id
    })
  }

  render() {
    return (
      <div className={'App'}>
        <Header/>
        <RandomPlanet/>
        <div className={'row'}>
          <div className={'col'}>
            <ItemList
            onItemSelected={this.onPersonSelected}/>
          </div>
          <div className={'col'}>
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  };
};