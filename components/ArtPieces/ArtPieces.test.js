import { render, screen } from "@testing-library/react";
import ArtPieces from ".";

/*test("All art pieces are displayed as a list", () => {
  render(<ArtPieces />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});
