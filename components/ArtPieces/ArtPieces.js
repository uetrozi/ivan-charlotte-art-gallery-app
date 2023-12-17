import Link from "next/link";
import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ pieces }) {



  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <Link 
            href={`/art-pieces/${piece.slug}`}
          >
            <ArtPiecePreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            ></ArtPiecePreview>
          </Link>
        </li>
      ))}
    </ul>
  );
}
