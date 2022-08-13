import React, { Component } from "react";

import './ItemList.css'

export default class ItemList extends Component {

  render() {
    return (
      <ul className={'ItemList list-group'}>
        <li  className={'list-group-item'}>
          Person Name 1
        </li>
        <li  className={'list-group-item'}>
          Person Name 2
        </li>
        <li  className={'list-group-item'}>
          Person Name 3
        </li>
      </ul>
    );
  }
}