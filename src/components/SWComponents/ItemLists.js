import React from "react";
import ItemList from "../ItemList";
import { withData, withSwapiService } from '../HOCHelpers';

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

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
};
const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
};
const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
};

const PersonList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps);

const StarshipList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName)),
  mapStarshipMethodsToProps);

const PlanetList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName)),
  mapPlanetMethodsToProps);

export {
  PersonList,
  StarshipList,
  PlanetList
}