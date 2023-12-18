import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";

export default function ArtPiecePreview({
  image,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <>
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Link href={`/art-pieces/${slug}`}>See more</Link>
      <Image src={image} width={240} height={240} alt={title} />
      <h3>{title}</h3>
      <p>{artist}</p>
    </>
  );
}
