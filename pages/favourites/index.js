import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function FavouritePage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const favorites = pieces.filter((piece) =>
    artPiecesInfo.find(
      (artPiece) => artPiece.slug === piece.slug && artPiece.isFavorite == true
    )
  );


  

  return (
    <ArtPieces
      pieces={favorites}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
    />
  );
}
