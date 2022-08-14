import React, { Component } from "react";

import './RandomPlanet.css'

export default class RandomPlanet extends Component {
  render() {
    return (
      <div className={'RandomPlanet'}>
        <img
          alt={'#'}
          className={'PlanetImage'}
          src={"https://starwars-visualguide.com/assets/img/planets/3.jpg"}
        />
        <div>
          <ul className={'list'}>
            <h4>Planet Name</h4>
            <li className={'item'}>
              <span className={'term'}>Population</span>
              <span>123456</span>
            </li>
            <li className={'item'}>
              <span className={'term'}>Rotation Period</span>
              <span>12</span>
            </li>
            <li className={'item'}>
              <span className={'term'}>Diametr</span>
              <span>123</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}