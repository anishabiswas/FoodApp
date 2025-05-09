import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("button related test cases", () => {
  test("Should render button on the webpage", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should render on the webpage", () => {
    render(<Contact />);
    const button = screen.getByText("Save");
    expect(button).toBeInTheDocument();
  });
  // we can write it/test both will is used for test cases
  it("Should render input name on the webpage", () => {
    render(<Contact />);
    const button = screen.getByPlaceholderText("email");
    expect(button).toBeInTheDocument();
  });
});
