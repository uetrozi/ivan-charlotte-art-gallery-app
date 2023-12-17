import useSWR from "swr";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces }) {
  const randomPic = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <div>
      
      <Spotlight
        image={randomPic.imageSource}
        artist={randomPic.artist}
      ></Spotlight>
    </div>
  );
}
