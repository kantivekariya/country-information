import { Link } from "react-router-dom";
import { CARD_TEST_CONSTANT } from "./CardConst";

import "./_card.scss";

interface ICardProps {
  country: {
    cca2: string;
    flags: { svg: string };
    name: {
      official: string;
    };
    population: number;
    region: string;
    capital: string;
  };
  theme: string;
}

const Card = ({ country, theme }: ICardProps) => {
  return (
    <Link
      to={`/${country.cca2}`}
      className="link"
      data-testid={CARD_TEST_CONSTANT.cardTestId}
    >
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
