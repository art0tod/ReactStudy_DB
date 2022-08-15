import React from "react";

import './ErrorIndicator.css'
import errIcon from './ServiceErrorIcon.png'

const ErrorIndicator = () => {
  return (
    <div className={'ErrorIndicator'}>
      <img src={errIcon} alt={'error icon'}/>
      <span className={'boom'}>
        BOOM!!!
      </span>
      <span>
        Something went wrong
      </span>
      <span>
        please wait...
      </span>
    </div>
  );
};

export default ErrorIndicator;