import ArtPieces from "@/components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
 
}) {
  return (
    <ArtPieces
      pieces={pieces}
      artPiecesInfo={artPiecesInfo}
      onToggleFavorite={onToggleFavorite}
      
    />
  );
}
