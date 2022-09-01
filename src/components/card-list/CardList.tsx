import Card from "../card/Card";
import { CARD_LIST_TEST_CONSTANT } from "./CardListConst";

import "./_card-list.scss";

interface ICardListProps {
  countries: Array<{
    cca2: string;
    flags: { svg: string };
    name: {
      official: string;
    };
    population: number;
    region: string;
    capital: string;
  }>;
  theme: string;
}

const CardList = ({ countries, theme }: ICardListProps) => (
  <div
    className="cardList-container"
    data-testid={CARD_LIST_TEST_CONSTANT.cardListTestId}
  >
    {countries.map((country: any) => (
      <Card key={country.cca2} country={country} theme={theme} />
    ))}
  </div>
);

export default CardList;
