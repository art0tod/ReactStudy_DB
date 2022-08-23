import React, {Component} from "react";

import './PeoplePage.css'
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import ErrorIndicator from "../ErrorIndicator";

export default class PeoplePage extends Component {

  state = {
    selectedPerson: 1,
    hasError: false
  }

  componentDidCatch(error, errorInfo) {
    debugger;
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

    return (
      <div className={'row'}>
        <div className={'col'}>
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}/>
        </div>
        <div className={'col'}>
          <PersonDetails personId={this.state.selectedPerson}/>
        </div>
      </div>
    )
  }
}