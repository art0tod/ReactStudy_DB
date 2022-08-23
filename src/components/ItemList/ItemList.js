import React, { Component } from "react";

import './ItemList.css'
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
    return arr.map((item) => {
      const { id } = item
      const label = this.props.renderItem(item);

      return (
        <li className={'item'}
            key={id}
            onClick={() => this.props.onItemSelected(id) }>
          {label}
        </li>
      );
    });
  }

  render() {

    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems(itemList)

    return (
      <ul className={'ItemList'}>
        {items}
      </ul>
    );
  }
}