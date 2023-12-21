import ArtPieces from "@/components/ArtPieces/ArtPieces";
import { useStore } from "@/components/store";

export default function ArtPiecesPage() {

  const {data} = useStore()
  console.log(data)

  return <ArtPieces pieces={data} />;
}
