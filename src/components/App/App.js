import React, { Component } from "react";

import Header from "../Header";

import './App.css'
import ErrorIndicator from "../ErrorIndicator";

import ItemDetails from "../ItemDetails";
import SwapiService from "../../services/SwapiService";
import ErrorBoundry from "../ErrorBoundry";
import Row from "../Row";

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

    const { getPerson, getStarship, getPersonImage, getStarshipsImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        getData={getPerson}
        itemId={3}
        getImageUrl={getPersonImage}/>
    );

    const starshipDetails = (
      <ItemDetails
        getData={getStarship}
        itemId={5}
        getImageUrl={getStarshipsImage}/>
    );

    return (
      <ErrorBoundry>
        <div className={'App'}>
          <Header/>

          <Row
            left={personDetails}
            right={starshipDetails}/>
        </div>
      </ErrorBoundry>
    );
  };
};