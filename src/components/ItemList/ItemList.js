import React, { Component } from "react";

import './ItemList.css'
import SwapiService from "../../services/SwapiService";
import Spinner from "../Spinner";

export default class ItemList extends Component {

  state = {
    itemList: null
  };

  componentDidMount() {

    const { getData } = this.props;

    getData()
      .then((itemList) => {
        this.setState({
          itemList
        });
      });
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className={'item'}
            key={id}
            onClick={() => this.props.onItemSelected(id) }>
          {name}
        </li>
      );
    });
  }

  render() {

    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList)

    return (
      <ul className={'ItemList'}>
        {items}
      </ul>
    );
  }
}