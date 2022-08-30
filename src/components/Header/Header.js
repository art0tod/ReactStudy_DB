import React from "react";

import './Header.css'

const Header = ({ onServiceChange }) => {
  return (
    <div className={'Header'}>
      <h2>
          Star React DB
      </h2>
      <ul className={'list'}>
        <a href={'#people'}>
          People
        </a>
        <a href={'#starships'}>
          Starships
        </a>
        <a href={'#planets'}>
          Planets
        </a>
      </ul>

      <button className={'HeaderBtn'}
              onClick={onServiceChange}>
        Change Service
      </button>
    </div>
  );
};

export default Header;