import {
  cleanup,
  fireEvent,
  prettyDOM,
  render,
  screen,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import SearchBox from "../SearchBox";
import { SEARCH_BOX_TEST_CONSTANT } from "../SearchBoxConst";

afterEach(cleanup);

const searchBoxProps = {
  placeholder: "Search Country",
  handleChange: () => {},
  theme: "light",
};

describe("Search box", () => {
  it("renders search box", () => {
    render(<SearchBox {...searchBoxProps} />, {
      wrapper: MemoryRouter,
    });
    const searchElement = screen.getByTestId(
      SEARCH_BOX_TEST_CONSTANT.searchBoxId
    );
    expect(searchElement).toBeInTheDocument();
    expect(searchElement).not.toBeChecked();
  });

  it("should be matches snapshot", () => {
    const { baseElement } = render(<SearchBox {...searchBoxProps} />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toMatchSnapshot();
  });
});
