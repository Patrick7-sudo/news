import { render, screen } from "@testing-library/react";
import Favbuttons from "./favButtons.js";

test("renders main Button for favourite Container", () => {
  render(<Favbuttons />);
  const buttons = screen.getByTestId("buttonFavourite");
  expect(buttons).toBeInTheDocument();

  expect(buttons).toHaveClass("backgroundColor");
});
