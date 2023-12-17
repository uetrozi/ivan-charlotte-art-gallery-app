import Image from "next/image";

export default function ArtPieceDetails({ image, artist, title, year, genre }) {
  return (
    <>
      <Image src={image} width={240} height={240} alt={image} />
      <p>Title: {title}</p>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </>
  );
}
