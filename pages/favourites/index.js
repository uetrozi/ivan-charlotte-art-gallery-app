import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useStore } from "../../components/store";

export default function FavouritePage({ pieces }) {
  const favorites = useStore((state) =>
    pieces.filter((piece) =>
      state.artPiecesInfo.find(
        (artPiece) =>
          artPiece.slug === piece.slug && artPiece.isFavorite == true
      )
    )
  );

  return <ArtPieces pieces={favorites} />;
}
