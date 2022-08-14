import React, { Component } from "react";

import SwapiService from "../../services/SwapiService";

import './RandomPlanet.css'

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  };

  constructor(props) {
    super(props);
    this.updatePlanet()
  }


  updatePlanet() {
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService
      .getPlanet(id)
      .then((planet) => {
        this.setState({
          id,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
        });
      });
  };

  render() {

    const { id, name, population, rotationPeriod, diameter } = this.state

    return (
      <div className={'RandomPlanet'}>
        <img
          alt={'#'}
          className={'PlanetImage'}
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
        <div>
          <ul className={'list'}>
            <h4>{ name }</h4>
            <li className={'item'}>
              <span className={'term'}>Population</span>
              <span>{ population }</span>
            </li>
            <li className={'item'}>
              <span className={'term'}>Rotation Period</span>
              <span>{ rotationPeriod }</span>
            </li>
            <li className={'item'}>
              <span className={'term'}>Diameter</span>
              <span>{ diameter }</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}