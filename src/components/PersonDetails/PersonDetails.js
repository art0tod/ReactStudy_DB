import React, { Component } from "react";

import './PersonDetails.css';
import SwapiService from "../../services/SwapiService";

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

    state = {
      person: null
    };

    componentDidMount() {
      this.updatePerson()
    };

    componentDidUpdate(prevProps,
                       prevState,
                       snapshot) {
      if (this.props.personId !== prevProps.personId) {
        this.updatePerson();
      }
    }

  updatePerson() {
      const { personId } = this.props;
      if (!personId) {
        return;
      }

      this.swapiService
        .getPerson(personId)
        .then((person) => {
          this.setState({ person });
        })
    }

  render() {

    if (!this.state.person) {
      return <span>Please select person</span>;
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return (

      <div className={'PersonDetails'}>
        <img
          alt={'#'}
          className={'PersonImage'}
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />
        <div className={'body'}>
          <h4>{name}</h4>
          <ul className={'list'}>
            <li className={'item'}>
              <span className={'term'}>Gender:</span>
              <span>{gender}</span>
            </li>
            <li className={'item'}>
              <span className={'term'}>Birth year:</span>
              <span>{birthYear}</span>
            </li>
            <li className={'item'}>
              <span className={'term'}>Eyes Color:</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
