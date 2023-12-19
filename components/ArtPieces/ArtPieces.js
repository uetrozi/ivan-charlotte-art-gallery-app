import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.slug}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
            slug={piece.slug}
          ></ArtPiecePreview>
        </li>
      ))}
    </ul>
  );
}
