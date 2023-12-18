import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";

export default function ArtPieceDetailsPage({ pieces, onSubmitComment}) {
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
        onSubmitComment={() => onSubmitComment(currentPiece.slug, "new Comment")}
      />
    </div>
  );
}
