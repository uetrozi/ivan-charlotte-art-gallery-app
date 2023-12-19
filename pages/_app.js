import useSWR from "swr";
import Layout from "@/components/Layout/layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import "../app.css";

import { useImmerLocalStorageState } from "@/resources/lib/hook/useImmerLocalStorageState";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  // function handleToggleFavorite(slug) {
  //   const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
  //   if (artPiece) {
  //     setArtPiecesInfo(
  //       artPiecesInfo.map((pieceInfo) =>
  //         pieceInfo.slug === slug
  //           ? { slug, isFavorite: !pieceInfo.isFavorite }
  //           : pieceInfo
  //       )
  //     );
  //   } else {
  //     setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
  //   }
  // }

  // function handleAddComment(slug, newComment) {
  //   console.log(slug, newComment);
  //   console.log(artPiecesInfo);

  //   const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);

  //   console.log("Comment added");

  //   if (artPiece) {
  //     setArtPiecesInfo(
  //       artPiecesInfo.map((pieceInfo) => {
  //         if (pieceInfo.slug === slug) {
  //           return pieceInfo.comments
  //             ? {
  //                 ...pieceInfo,
  //                 comments: [...pieceInfo.comments, newComment],
  //               }
  //             : { ...pieceInfo, comments: [newComment] };
  //         }
  //       })
  //     );
  //   } else {
  //     setArtPiecesInfo([
  //       ...artPiecesInfo,
  //       { slug: slug, isFavorite: false, comments: [newComment] },
  //     ]);
  //   }
  // }

  return (
    <>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 1000,
        }}
      >
        <GlobalStyle />
        <Layout />
        <Component
          {...pageProps}
          artPiecesInfo={artPiecesInfo}
          pieces={data}
        />
      </SWRConfig>
    </>
  );
}
