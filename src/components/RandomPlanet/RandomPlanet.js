import React, { Component } from "react";

import SwapiService from "../../services/SwapiService";
import Spinner from "../Spinner";

import './RandomPlanet.css'

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  constructor(props) {
    super(props);
    this.updatePlanet()
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  }

  updatePlanet() {
    const id = Math.floor(Math.random()*15) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  render() {

    const { planet, loading } = this.state;
    const spinner = loading ? <Spinner/> : null;
    const content = !loading ? <PlanetView planet={planet}/> : null;

    if (loading) {
      return <Spinner/>
    }

    return (
      <div className={'RandomPlanet'}>
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {

  const
    {
      id,
      name,
      population,
      rotationPeriod,
      diameter
    } = planet

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
};