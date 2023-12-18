import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/commentForm";

export default function ArtPieceDetails({ image, artist, title, year, genre, onSubmitComment }) {
  return (
    <>
      <button>
        <Link href={`/art-pieces/`}>Go Back</Link>
      </button>
      <FavoriteButton />
      <Image src={image} width={240} height={240} alt={image} />
      <p>Title: {title}</p>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <CommentForm onSubmitComment={onSubmitComment}/>
    </>
  );
}
