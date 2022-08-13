import React, { Component } from "react";

import './RandomPlanet.css'

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className={'RandomPlanet jumbotron rounded'}>
        <img
          alt={'#'}
          className={'PlanetImage'}
          src={"https://starwars-visualguide.com/assets/img/planets/3.jpg"}
        />
        <div>
          <h4>Planet Name</h4>
          <ul className={'list-group list-group-flush'}>
            <li className={'list-group-item'}>
              <span className={'term'}>Population</span>
              <span>123456</span>
            </li>
            <li className={'list-group-item'}>
              <span className={'term'}>Rotation Period</span>
              <span>12</span>
            </li>
            <li className={'list-group-item'}>
              <span className={'term'}>Diametr</span>
              <span>123</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}