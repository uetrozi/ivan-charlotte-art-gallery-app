import useSWR from "swr";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ data }) {
  const randomPic = data[Math.floor(Math.random() * data.length)];

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight
        image={randomPic.imageSource}
        artist={randomPic.artist}
      ></Spotlight>
    </div>
  );
}
