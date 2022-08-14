import React, { Component } from "react";

import './ItemList.css'

export default class ItemList extends Component {

  render() {
    return (
      <ul className={'ItemList'}>
        <li  className={'item'}>
          Person Name 1
        </li>
        <li  className={'item'}>
          Person Name 2
        </li>
        <li  className={'item'}>
          Person Name 3
        </li>
      </ul>
    );
  }
}