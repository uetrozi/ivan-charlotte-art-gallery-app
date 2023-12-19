import { getByAltText, render, screen } from "@testing-library/react";
import FavoriteButton from "./FavoriteButton";
import Spotlight from "../Spotlight/spotlight";
import ArtPieces from "@/pages/art-pieces";
import ArtPieceDetails from "../ArtPieceDetails/ArtPieceDetails";
import userEvent from "@testing-library/user-event";

test("the favorite-button is displayed in the spotlight view", () => {
  const artistTest = "dilara irem";

  const imageSource =
    "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg";

  render(<Spotlight image={imageSource} artist={artistTest} />);
  const button = screen.getByAltText(/Favorite-button/i);
  expect(button).toBeInTheDocument();
});

const testPieces = [
  {
    slug: "clay-bust-sculptures",
    artist: "dilara irem",
    name: "Clay Bust Sculptures",
    imageSource:
      "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
    year: "2022",
  },
  {
    slug: "bread-and-fruits",
    artist: "Lisa vhb",
    name: "Flatlay Photography of Bread and Fruits",
    imageSource:
      "https://example-apis.vercel.app/assets/art/bread-and-fruits.jpg",
    year: "unknown",
  },
  {
    slug: "kiwi-juice-on-glass",
    artist: "Alexander Mils",
    name: "Kiwi Juice on Glass",
    imageSource:
      "https://example-apis.vercel.app/assets/art/kiwi-juice-on-glass.jpg",
    year: "2015",
  },
];

test("The favorite-button is displayed in each entry in the list view", () => {
  render(<ArtPieces pieces={testPieces} />);
  const button = screen.getAllByAltText(/Favorite-button/i);
  expect(button).toHaveLength(3);
});

const testPiece = {
  slug: "clay-bust-sculptures",
  testartist: "dilara irem",
  name: "Clay Bust Sculptures",
  imageSource:
    "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg",
  year: "2022",
  genre: "Classics",
  isFavorite: false,
};

test("The favorite-button is displayed in the details view", () => {
  render(
    <ArtPieceDetails
      image={testPiece.imageSource}
      title={testPiece.name}
      artist={testPiece.testartist}
      year={testPiece.year}
      genre={testPiece.genre}
      isFavorite={testPiece.isFavorite}
    />
  );
  const button = screen.getByAltText(/Favorite-button/i);
  expect(button).toBeInTheDocument();
});

test("Clicking the favorite-button on a non-favorite piece saves it as a favorite", async () => {
  const user = userEvent.setup();
  render(
    <ArtPieceDetails
      image={testPiece.imageSource}
      title={testPiece.name}
      artist={testPiece.testartist}
      year={testPiece.year}
      genre={testPiece.genre}
      isFavorite={testPiece.isFavorite}
    />
  );
  const button = screen.getByAltText(/Favorite-button/i);
  await user.click(button);
  expect(button).toBeInTheDocument();
});
