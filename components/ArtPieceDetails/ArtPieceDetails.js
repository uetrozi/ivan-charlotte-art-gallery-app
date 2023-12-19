import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { useStore } from "../../pages/store";

export default function ArtPieceDetails({
  image,
  artist,
  title,
  year,
  genre,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  const onSubmitComment = useStore((state) => state.addComment);
  const piece = useStore((state) =>
    state.artPiecesInfo.find((piece) => piece.slug === slug)
  );

  return (
    <>
      <button>
        <Link href={`/art-pieces/`}>Go Back</Link>
      </button>
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Image src={image} width={240} height={240} alt={image} />
      <p>Title: {title}</p>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <CommentForm onSubmitComment={onSubmitComment} slug={slug} />
      <Comments comments={piece?.comments} />
    </>
  );
}
