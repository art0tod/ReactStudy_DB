import React, { Component } from "react";
import { withData } from '../HOCHelpers'

import './ItemList.css'

import SwapiService from "../../services/SwapiService";

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li className={'item'}
          key={id}
          onClick={() => onItemSelected(id) }>
        {label}
      </li>
    );
  });

  return (
    <ul className={'ItemList'}>
      {items}
    </ul>
  );
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);