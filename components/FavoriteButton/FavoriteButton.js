import Image from "next/image";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 50px;
  position: absolute;

  z-index: 1;
  width: 50px;
  height: 50px;
  background-color: ${({ $isFavorite }) =>
    $isFavorite === true ? "coral" : "white"};
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button type="button" onClick={onToggleFavorite} $isFavorite={isFavorite}>
      <Image
        src="/assets/heart.svg"
        width={30}
        height={30}
        alt="Favorite-Button"
      />
    </Button>
  );
}
