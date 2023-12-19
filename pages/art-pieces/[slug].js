import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";

export default function ArtPieceDetailsPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
  onSubmitComment,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const currentIndex = pieces.findIndex((piece) => piece.slug === slug);

  const currentPiece = pieces[currentIndex];

  if (!currentPiece) {
    return null;
  }

  return (
    <div>
      <ArtPieceDetails
        image={currentPiece.imageSource}
        title={currentPiece.name}
        artist={currentPiece.artist}
        year={currentPiece.year}
        genre={currentPiece.genre}
        artPiecesInfo={artPiecesInfo}
        isFavorite={
          artPiecesInfo?.find((artPiece) => artPiece.slug === currentPiece.slug)
            ?.isFavorite
        }
        slug={slug}
        onToggleFavorite={() => onToggleFavorite(currentPiece.slug)}
        onSubmitComment={() =>
          onSubmitComment(currentPiece.slug)
        }
      />
    </div>
  );
}
