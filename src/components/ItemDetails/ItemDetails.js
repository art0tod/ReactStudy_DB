import React, { Component } from "react";

import './ItemDetails.css';
import SwapiService from "../../services/SwapiService";
import ErrorBtn from "../ErrorBtn";

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

    state = {
      item: null,
      image: null
    };

    componentDidMount() {
      this.updatePerson()
    };

    componentDidUpdate(prevProps,
                       prevState,
                       snapshot) {
      if (this.props.itemId !== prevProps.itemId) {
        this.updatePerson();
      }
    }

  updatePerson() {
      const { itemId, getData, getImageUrl } = this.props;
      if (!itemId) {
        return;
      }

      getData(itemId)
        .then((item) => {
          this.setState({
            item,
            image: getImageUrl(item)
          });
        })
    }

  render() {

    const { item, image } = this.state;

    if (!this.state.item) {
      return <span>Please select person</span>;
    }

    const { id, name, gender, birthYear, eyeColor } = item;

    return (

      <div className={'PersonDetails'}>
        <img
          alt={'#'}
          className={'PersonImage'}
          src={image}
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
