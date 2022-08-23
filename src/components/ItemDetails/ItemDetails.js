import React, { Component } from "react";

import './ItemDetails.css';
import SwapiService from "../../services/SwapiService";
import ErrorBtn from "../ErrorBtn";

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

    state = {
      item: null
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

    if (!this.state.item) {
      return <div className={'hint'}> Please select</div>;
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.item;

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
        <ErrorBtn/>
      </div>
    );
  }
}
