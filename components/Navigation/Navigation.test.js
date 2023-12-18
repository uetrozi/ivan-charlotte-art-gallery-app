import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

test("a navigation link labeled Spotlight is displayed and navigation link labeled Pieces is displayed", () => {
  render(<Navigation />);
  const spotlightLink = screen.getByRole("link", {
    name: /spotlight/i,
  });
  const allPiecesLink = screen.getByRole("link", {
    name: /pieces/i,
  });

  expect(spotlightLink).toBeInTheDocument();
  expect(allPiecesLink).toBeInTheDocument();
});
