import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import CardList from "../CardList";
import { CARD_LIST_TEST_CONSTANT } from "../CardListConst";

afterEach(cleanup);

const cardListProps = {
  countries: [
    {
      cca2: "FI",
      flags: { svg: "https://flagcdn.com/fi.svg" },
      name: {
        official: "Republic of Finland",
      },
      population: 5530719,
      region: "Europe",
      capital: "Helsinki",
    },
    {
      cca2: "GT",
      flags: { svg: "https://flagcdn.com/gt.svg" },
      name: {
        official: "Republic of Guatemala",
      },
      population: 16858333,
      region: "Americas",
      capital: "Guatemala City",
    },
  ],
  theme: "light",
};

describe("Card List", () => {
  it("renders card list", () => {
    render(<CardList {...cardListProps} />, {
      wrapper: MemoryRouter,
    });
    const cardListElement = screen.getByTestId(
      CARD_LIST_TEST_CONSTANT.cardListTestId
    );
    expect(cardListElement).toBeInTheDocument();
    expect(cardListElement).not.toBeChecked();
  });

  it("should be matches snapshot", () => {
    const { baseElement } = render(<CardList {...cardListProps} />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toMatchSnapshot();
  });
});
