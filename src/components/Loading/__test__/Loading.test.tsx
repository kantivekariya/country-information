import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Loading from "../Loading";

afterEach(cleanup);

const loaderProps = {
  theme: "light",
};

describe("Card List", () => {
  it("renders card list", () => {
    render(<Loading {...loaderProps} />, {
      wrapper: MemoryRouter,
    });
    const cardListElement = screen.getByTestId("loadingTestId");
    expect(cardListElement).toBeInTheDocument();
    expect(cardListElement).not.toBeChecked();
  });

  it("should be matches snapshot", () => {
    const { baseElement } = render(<Loading {...loaderProps} />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toMatchSnapshot();
  });
});
