import { useRouter } from "next/router";
import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";

export default function ArtPieceDetailsPage({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const currentIndex = data.findIndex((piece) => piece.slug === slug);

  const currentPiece = data[currentIndex];

  if (!currentPiece) {
    return null;
  }

  console.log(currentPiece);

  return (
    <div>
      <ArtPieceDetails
        image={currentPiece.imageSource}
        title={currentPiece.name}
        artist={currentPiece.artist}
        year={currentPiece.year}
        genre={currentPiece.genre}
      />
    </div>
  );
}
