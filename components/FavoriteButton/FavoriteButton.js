import Image from "next/image";
import styled from "styled-components";
import { useStore } from "../../pages/store";

const Button = styled.button`
  border-radius: 40px;
  background-color: ${({ $isFavorite }) =>
    $isFavorite === true ? "coral" : "white"};
`;

export default function FavoriteButton({ slug }) {
  const onToggleFavorite = useStore((state) => state.toggleFavorite);

  function handleToggle() {
    onToggleFavorite(slug);
  }

  const piece = useStore((state) =>
    state.artPiecesInfo.find((piece) => piece.slug === slug)
  );
  const isFavorite = piece?.isFavorite;

  return (
    <Button type="button" onClick={handleToggle} $isFavorite={isFavorite}>
      <Image
        src="/assets/heart.svg"
        width={50}
        height={50}
        alt="Favorite-Button"
      />
    </Button>
  );
}
