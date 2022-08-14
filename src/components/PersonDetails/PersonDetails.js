import React, { Component } from "react";

import './PersonDetails.css';

export default class PersonDetails extends Component {

  render() {
    return (
      <div className={'PersonDetails'}>
        <img
          alt={'#'}
          className={'PersonImage'}
          src={"https://starwars-visualguide.com/assets/img/characters/4.jpg"}
        />
        <div className={'body'}>
          <h4>Person Name 1</h4>
          <ul className={'list'}>
            <li className={'item'}>
              <span className={'term'}>Gender:</span>
              <span>Person Gender</span>
            </li>
            <li className={'item'}>
              <span className={'term'}>Birth year:</span>
              <span>Person Year</span>
            </li>
            <li className={'item'}>
              <span className={'term'}>Eyes Color:</span>
              <span>Person Eyes Color</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
