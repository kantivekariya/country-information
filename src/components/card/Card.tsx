import React from "react";
import { Link } from "react-router-dom";

import "./_card.scss";

const Card = ({ country, theme }: any) => {
  return (
    <Link to={`/${country.cca2}`} className="link">
      <div className={`card-container ${theme}`}>
        <img className="card-flag" alt="flag" src={country.flags?.svg} />
        <div className="card-description">
          <h3 className="card-title">{country.name.official}</h3>
          <div className="card-text">
            <span>Population: </span>
            {country.population.toLocaleString()}
          </div>
          <div className="card-text">
            <span>Region: </span>
            {country.region}
          </div>
          <div className="card-text">
            <span>Capital: </span>
            {country.capital}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
