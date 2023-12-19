import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import { useStore } from "../store";
import styled from "styled-components";

const Button = styled.button`
  background-color: coral;
  color: white;
  border-radius: 10px;
  padding: 5px;
  margin-top: 10px;
  text-decoration: none;
  
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export default function ArtPieceDetails({
  image,
  artist,
  title,
  year,
  genre,
  slug,
}) {
  const onSubmitComment = useStore((state) => state.addComment);

  const piece = useStore((state) =>
    state.artPiecesInfo.find((piece) => piece.slug === slug)
  );

  return (
    <>
      <FavoriteButton slug={slug} isFavorite={piece?.isFavorite} />
      <Image src={image} width={240} height={240} alt={image} />
      <div>
        <Button>
          <StyledLink href={`/art-pieces/`}>Go Back</StyledLink>
        </Button>
      </div>
      <p>Title: {title}</p>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <CommentForm onSubmitComment={onSubmitComment} slug={slug} />
      <Comments comments={piece?.comments} />
    </>
  );
}
