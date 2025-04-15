import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

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

it("Should render input name on the webpage", () => {
  render(<Contact />);
  const button = screen.getByPlaceholderText("email");
  expect(button).toBeInTheDocument();
});
