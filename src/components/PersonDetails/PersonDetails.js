import React, { Component } from "react";

import './PersonDetails.css';

export default class PersonDetails extends Component {

  render() {
    return (
      <div className={'PersonDetails card'}>
        <img
          alt={'#'}
          className={'PersonImage'}
          src={"https://starwars-visualguide.com/assets/img/characters/4.jpg"}
        />
        <div className={'card-body'}>
          <h4>Person Name 1</h4>
          <ul className={'list-group list-group-flush'}>
            <li className={'list-group-item'}>
              <span className={'term'}>Gender</span>
              <span>Person Gender</span>
            </li>
            <li className={'list-group-item'}>
              <span className={'term'}>Birth year</span>
              <span>Person Year</span>
            </li>
            <li className={'list-group-item'}>
              <span className={'term'}>Eyes Color</span>
              <span>Person Eyes Color</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
