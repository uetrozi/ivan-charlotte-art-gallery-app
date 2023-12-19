import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({ image, artist, slug }) {
  return (
    <>
      {" "}
      <FavoriteButton slug={slug} />
      <Image src={image} width={480} height={480} alt={image} />
      <p>{artist}</p>
    </>
  );
}
