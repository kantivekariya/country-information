import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import * as reactRedux from "react-redux";

import "@testing-library/jest-dom";
import CountryInfo from "../CountryInfo";
import { COUNTRY_TEST_CONST } from "../CountryConst";

afterEach(cleanup);

const loaderProps = {
  theme: "light",
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("Country Info", () => {
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  const dummyDispatch = jest.fn();
  useDispatchMock.mockReturnValue(dummyDispatch);

  const mockedState = {
    countryInfo: {
      countryList: [],
      status: "PENDING",
      isLoading: false,
      error: "",
    },
  };

  beforeEach(() => {
    // @ts-ignore
    reactRedux.useSelector.mockImplementation((callback) => {
      return callback(mockedState);
    });
  });

  it("renders country info", () => {
    render(<CountryInfo {...loaderProps} />, {
      wrapper: MemoryRouter,
    });
    const cardListElement = screen.getByTestId(
      COUNTRY_TEST_CONST.countryTestId
    );
    expect(cardListElement).toBeInTheDocument();
    expect(cardListElement).not.toBeChecked();
  });

  it("should be matches snapshot", () => {
    const { baseElement } = render(<CountryInfo {...loaderProps} />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toMatchSnapshot();
  });
});
