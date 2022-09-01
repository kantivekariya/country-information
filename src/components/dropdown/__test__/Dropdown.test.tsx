import {
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Dropdown from "../Dropdown";
import { DROPDOWN_TEST_CONSTANT } from "../DropDownConst";

afterEach(cleanup);

const dropDownProps = {
  theme: "light",
  title: "",
  regions: ["Europe"],
  handleChange: () => {},
};

describe("Drop down", () => {
  it("renders Drop down", () => {
    render(<Dropdown {...dropDownProps} />, {
      wrapper: MemoryRouter,
    });
    const dropDownElement = screen.getByTestId(
      DROPDOWN_TEST_CONSTANT.dropDownTestId
    );
    expect(dropDownElement).toBeInTheDocument();
    expect(dropDownElement).not.toBeChecked();
  });

  it("should be click on drop down", () => {
    render(<Dropdown {...dropDownProps} />, {
      wrapper: MemoryRouter,
    });
    const dropDownElement = screen.getByTestId(
      DROPDOWN_TEST_CONSTANT.manageClickEventId
    );
    fireEvent.click(dropDownElement);
    expect(dropDownElement).toBeInTheDocument();
    expect(dropDownElement).not.toBeChecked();
  });

  it("should be select drop down item", () => {
    render(<Dropdown {...dropDownProps} />, {
      wrapper: MemoryRouter,
    });
    const dropDownElement = screen.getByTestId(
      DROPDOWN_TEST_CONSTANT.selectItemId
    );
    fireEvent.click(dropDownElement);
    expect(dropDownElement).toBeInTheDocument();
    expect(dropDownElement).not.toBeChecked();
  });

  it("should be matches snapshot", () => {
    const { baseElement } = render(<Dropdown {...dropDownProps} />, {
      wrapper: MemoryRouter,
    });
    expect(baseElement).toMatchSnapshot();
  });
});
