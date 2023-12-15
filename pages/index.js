import useSWR from "swr";
import Link from "next/link";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  console.log(data);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  const randomPic = data[Math.floor(Math.random() * data.length)];
  console.log(randomPic);

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight
        image={randomPic.imageSource}
        artist={randomPic.artist}
      ></Spotlight>
      <div>
        <ArtPieces pieces={data}></ArtPieces>
      </div>
    </div>
  );
}
