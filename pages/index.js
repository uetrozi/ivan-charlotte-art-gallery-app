import Spotlight from "@/components/Spotlight/spotlight";

export default function SpotlightPage({
  pieces,
 
}) {
  const randomPic = pieces[Math.floor(Math.random() * pieces.length - 1)];

  return (
    <div>
      <Spotlight
        image={randomPic.imageSource}
        artist={randomPic.artist}
        slug={randomPic.slug}
      ></Spotlight>
    </div>
  );
}
