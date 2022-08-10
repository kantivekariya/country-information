import React from "react";

import Card from "../card/Card";

import "./_card-list.scss";

interface IProps {
  countries: Array<any[]>;
  theme: string;
}

const CardList = ({ countries, theme }: IProps) => (
  <div className="cardList-container">
    {countries.map((country: any) => (
      <Card key={country.cca2} country={country} theme={theme} />
    ))}
  </div>
);

export default CardList;
