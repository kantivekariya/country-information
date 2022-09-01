import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Card from "../Card";
import { CARD_TEST_CONSTANT } from "../CardConst";

afterEach(cleanup);

const cardProps = {
  country: {
    cca2: "FI",
    flags: { svg: "https://flagcdn.com/fi.svg" },
    name: {
      official: "Republic of Finland",
    },
    population: 5530719,
    region: "Europe",
    capital: "Helsinki",
  },
  theme: "light",
};

describe("Card", () => {
  it("renders card", () => {
    render(<Card {...cardProps} />, {
      wrapper: MemoryRouter,
    });
    const cardElement = screen.getByTestId(CARD_TEST_CONSTANT.cardTestId);
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).not.toBeChecked();
  });

  it("Click on Card", () => {
    render(<Card {...cardProps} />, {
      wrapper: MemoryRouter,
    });
    const cardElement = screen.getByTestId(CARD_TEST_CONSTANT.cardTestId);
    fireEvent.click(cardElement);
    expect(cardElement).toHaveAttribute("href", "/FI");
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).not.toBeChecked();
  });

  it("should be matches snapshot", () => {
    const { baseElement } = render(<Card {...cardProps} />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toMatchSnapshot();
  });
});
