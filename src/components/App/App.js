import React, { Component } from "react";

import Header from "../Header";

import './App.css'
import ErrorIndicator from "../ErrorIndicator";

import ItemDetails from "../ItemDetails";
import { Record } from "../ItemDetails/ItemDetails";
import SwapiService from "../../services/SwapiService";
import ErrorBoundry from "../ErrorBoundry";
import Row from "../Row";
import ItemList from "../ItemList";

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

    const { getPerson, getStarship, getPersonImage, getStarshipsImage, getAllPeople, getAllPlanets } = this.swapiService;

    const personDetails = (
      <ItemDetails
        getData={getPerson}
        itemId={3}
        getImageUrl={getPersonImage}>

        <Record field={'gender'} label={'Gender'} />
        <Record field={'eyeColor'} label={'Eye Color'} />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        getData={getStarship}
        itemId={5}
        getImageUrl={getStarshipsImage}>

        <Record field={'model'} label={'Model'} />
        <Record field={'length'} label={'Length'} />
        <Record field={'crew'} label={'Crew'} />

      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className={'App'}>
          <Header/>

          <ItemList
            getData={getAllPeople}
            onItemSelected={() => {}}>

            { ({ name }) => <span>{ name }</span> }
          </ItemList>
          <ItemList
            getData={getAllPlanets}
            onItemSelected={() => {}}>

            {({ name }) => <span>{ name }</span>}
          </ItemList>

        </div>
      </ErrorBoundry>
    );
  };
};