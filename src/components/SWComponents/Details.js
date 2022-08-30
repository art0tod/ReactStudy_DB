import React from "react";

import ItemDetails from "../ItemDetails";
import {Record} from "../ItemDetails/ItemDetails";
import { SwapiServiceConsumer } from "../SwapiServiceContext";

const PersonDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPerson, getPersonImage }) => {
          return (
            <ItemDetails
              getData={getPerson}
              itemId={itemId}
              getImageUrl={getPersonImage}>

              <Record field={'gender'} label={'Gender'} />
              <Record field={'eyeColor'} label={'Eye Color'} />

            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
};

const StarshipDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarship, getStarshipsImage }) => {
          return (
            <ItemDetails
              getData={getStarship}
              itemId={itemId}
              getImageUrl={getStarshipsImage}>

              <Record field={'model'} label={'Model'} />
              <Record field={'length'} label={'Length'} />
              <Record field={'crew'} label={'Crew'} />

            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
};

const PlanetDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getPlanet, getPlanetImage }) => {
          return (
            <ItemDetails
              getData={getPlanet}
              itemId={itemId}
              getImageUrl={getPlanetImage}>

              <Record field={'population'} label={'Population'} />
              <Record field={'rotation_period'} label={'Rotation period'} />
              <Record field={'diameter'} label={'Diameter'} />

            </ItemDetails>
          )
        }
      }
    </SwapiServiceConsumer>
  )
};

export {
  PersonDetails,
  StarshipDetails,
  PlanetDetails
}
