import Image from "next/image";
import styled from "styled-components";
import { useStore } from "../../pages/store";

const Button = styled.button`


export default function FavoriteButton({ slug }) {
  const onToggleFavorite = useStore((state) => state.toggleFavorite);

  function handleToggle() {
    onToggleFavorite(slug);
  }

  const piece = useStore((state) =>
    state.artPiecesInfo.find((piece) => piece.slug === slug)
  );
  const isFavorite = piece?.isFavorite;
=======
  border-radius: 50px;
  position: absolute;

  z-index: 1;
  width: 50px;
  height: 50px;
  background-color: ${({ $isFavorite }) =>
    $isFavorite === true ? "coral" : "white"};
`;


  return (
    <Button type="button" onClick={handleToggle} $isFavorite={isFavorite}>
      <Image
        src="/assets/heart.svg"
        width={30}
        height={30}
        alt="Favorite-Button"
      />
    </Button>
  );
}
