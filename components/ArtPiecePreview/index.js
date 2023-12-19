import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Link from "next/link";
import styled from "styled-components";

const ImageStyled = styled(Image)`
  position: relative;
  padding-top: 20px;
  padding-bottom: 10px;
`;

const ParagraphStyled = styled.p`
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 30px;

  margin: 0px;
`;

const SubTitleStyled = styled.h3`
  margin: 0px;
  padding-top: 10px;
`;

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
      <Link href={`/art-pieces/${slug}`}>
        <ImageStyled src={image} width={240} height={240} alt={title} />

        <SubTitleStyled>{title}</SubTitleStyled>
        <ParagraphStyled>{artist}</ParagraphStyled>
      </Link>
    </>
  );
}
