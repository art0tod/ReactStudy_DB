import React from "react";
import ItemList from "../ItemList";
import { withData } from '../HOCHelpers';
import SwapiService from "../../services/SwapiService";

const  swapiService = new SwapiService();

const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = swapiService;

const withChildFunction = (Wraped, fn) => {
  return (props) => {
    return (
      <Wraped {...props}>
        {fn}
      </Wraped>
    )
  }
};

const renderName = ({ name }) => <span>{name}</span>
const renderModelAndName = ({model, name}) => <span>{name}, ({model})</span>

const PersonList = withData(
  withChildFunction(ItemList, renderName), getAllPeople);

const StarshipList = withData(
  withChildFunction(ItemList, renderModelAndName), getAllStarships);

const PlanetList = withData(
  withChildFunction(ItemList, renderName), getAllPlanets);

export {
  PersonList,
  StarshipList,
  PlanetList
}