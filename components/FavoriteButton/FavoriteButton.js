import Image from "next/image";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => (props.isFavorite ? "red" : "white")};
`;

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <Button type="button" onClick={onToggleFavorite} isFavorite={isFavorite}>
      <Image
        src="/assets/heart.svg"
        width={50}
        height={50}
        alt="Favorite-Button"
      />
    </Button>
  );
}
