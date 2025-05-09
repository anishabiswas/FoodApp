import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import data from "../../utils/mockData";

import RestaurantCard, { WithDiscountInfo } from "../RestaurantCard";

test("Should render the Restcard with props data", () => {
  console.log("mockData:", data);
  // Pass the first element's resData property to the component
  render(<RestaurantCard resData={data.resData} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});
test("Should render the card with discount info", () => {
  const DiscountedCard = WithDiscountInfo(RestaurantCard);
  render(<DiscountedCard resData={data.resData} />);
  const discountHeader = screen.getByText(/50% OFF/i);
  const discountSubHeader = screen.getByText(/UPTO ₹100/i);
  expect(discountHeader).toBeInTheDocument();
  expect(discountSubHeader).toBeInTheDocument();
});
