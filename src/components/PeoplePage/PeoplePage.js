import React, {Component} from "react";

import './PeoplePage.css'
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";
import ErrorIndicator from "../ErrorIndicator";
import SwapiService from "../../services/SwapiService";
import Row from "../Row";
import personDetails from "../ItemDetails";

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    })
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}/>
    );

    const personDetails = (
      <ItemDetails personId={this.state.selectedPerson}/>
    );

    return (
        <Row left={itemList}
             right={personDetails}/>
    )
  }
}