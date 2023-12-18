import { render, screen } from "@testing-library/react";
import Spotlight from "./spotlight";

test("The art piece image is displayed", () => {
  const artistTest = "dilara irem";

  const imageSource =
    "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg";

  render(<Spotlight image={imageSource} artist={artistTest} />);

  const image = screen.getByRole("img", {name: imageSource} );
  expect(image).toBeInTheDocument();
});

test("The art piece artist is displayed", () => {
  const artistTest = "dilara irem";
  const imageSource =
    "https://example-apis.vercel.app/assets/art/clay-bust-sculptures.jpg";

  render(<Spotlight image={imageSource} artist={artistTest} />);
  const artist = screen.getByText(/dilara irem/i);
  expect(artist).toBeInTheDocument();
});
