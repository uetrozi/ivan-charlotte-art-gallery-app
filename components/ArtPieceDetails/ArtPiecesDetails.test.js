import { render, screen } from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails";

const testPiece = {
  slug: "clay-bust-sculptures",
  testartist: "dilara irem",
  name: "Clay Bust Sculptures",
  imageSource:
    "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
  year: "2022",
  genre: "Classics",
};

test("The art piece image, title, artist, year and genre is displayed", () => {
  render(
    <ArtPieceDetails
      image={testPiece.imageSource}
      title={testPiece.name}
      artist={testPiece.testartist}
      year={testPiece.year}
      genre={testPiece.genre}
    />
  );
  const image = screen.getByRole("img", { name: testPiece.imageSource });
  const title = screen.getByText(/Clay Bust Sculptures/i);
  const artist = screen.getByText(/dilara irem/i);
  const year = screen.getByText(/2022/i);
  const genre = screen.getByText(/classics/i);

  expect(image).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(artist).toBeInTheDocument();
  expect(year).toBeInTheDocument();
  expect(genre).toBeInTheDocument();
});

test("A back-button is displayed", () => {
  render(<ArtPieceDetails image={testPiece.imageSource}></ArtPieceDetails>);
  const button = screen.getByRole("button", { name: /Go Back/i });
  expect(button).toBeInTheDocument();
});
