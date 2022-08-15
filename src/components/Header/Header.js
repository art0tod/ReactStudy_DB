import React from "react";

import './Header.css'

const Header = () => {
  return (
    <div className={'Header'}>
      <h2>
          Star React DB
      </h2>
      <ul className={'list'}>
        <a href={'_blank'}>
          People
        </a>
        <a href={'_blank'}>
          Starships
        </a>
        <a href={'_blank'}>
          Planets
        </a>
      </ul>
    </div>
  );
};

export default Header;