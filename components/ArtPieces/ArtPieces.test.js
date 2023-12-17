import { render, screen } from "@testing-library/react";
import ArtPieces from "./ArtPieces";

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

test("All art pieces are displayed as a list", () => {
  render(<ArtPieces pieces={testPieces} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});

test("Each art piece's image is displayed", () => {
  render(<ArtPieces pieces={testPieces} />);
  const image = screen.getAllByRole("img");
  expect(image).toHaveLength(3);
});

test("Each art piece's title is displayed", () => {
  render(<ArtPieces pieces={testPieces} />);
  const title = screen.getAllByRole("heading");
  expect(title).toHaveLength(3);
});

test("Each art piece's artist is displayed", () => {
  render(<ArtPieces pieces={testPieces} />);
  const artist1 = screen.getByText("dilara irem");
  const artist2 = screen.getByText("Lisa vhb");
  const artist3 = screen.getByText("Alexander Mils");

  expect(artist1).toBeInTheDocument();
  expect(artist2).toBeInTheDocument();
  expect(artist3).toBeInTheDocument();
});
