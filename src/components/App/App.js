import React, { Component } from "react";

import Header from "../Header";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import RandomPlanet from "../RandomPlanet";

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <Header/>
        <RandomPlanet/>
        <div className={'row'}>
          <div className={'col'}>
            <ItemList/>
          </div>
          <div className={'col'}>
            <PersonDetails/>
          </div>
        </div>
      </div>
    );
  };
};