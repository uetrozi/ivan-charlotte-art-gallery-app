import Spotlight from "@/components/Spotlight/spotlight";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const randomPic = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <div>
      <Spotlight
        image={randomPic.imageSource}
        artist={randomPic.artist}
        isFavorite={
          artPiecesInfo.find((piece) => piece.slug === randomPic.slug)
            ?.isFavorite
        }
        onToggleFavorite={() => onToggleFavorite(randomPic.slug)}
      ></Spotlight>
    </div>
  );
}
