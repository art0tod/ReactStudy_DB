import React, { Component } from "react";

import './ItemDetails.css';
import ErrorBtn from "../ErrorBtn";

const Record = ({ item, field, label }) => {
  return (
    <li className={'item'}>
      <span className={'term'}>{label}</span>
      <span>{ item[field] }</span>
    </li>
  )
}

export {
  Record
}

export default class ItemDetails extends Component {

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
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
        </div>
        <ErrorBtn/>
      </div>
    );
  }
}
