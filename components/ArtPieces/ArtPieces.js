import ArtPiecePreview from "@/components/ArtPiecePreview";
import "./ArtPieces";

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            isFavorite={
              artPiecesInfo?.find((artPiece) => artPiece.slug === piece.slug)
                ?.isFavorite
            }
            onToggleFavorite={() => onToggleFavorite(piece.slug)}
          ></ArtPiecePreview>
        </li>
      ))}
    </ul>
  );
}
