import React from "react";

import ItemDetails from "../ItemDetails";
import {Record} from "../ItemDetails/ItemDetails";
import {withSwapiService} from "../HOCHelpers";

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>

      <Record field={'population'} label={'Population'} />
      <Record field={'rotation_period'} label={'Rotation period'} />
      <Record field={'diameter'} label={'Diameter'} />

    </ItemDetails>
  )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);
