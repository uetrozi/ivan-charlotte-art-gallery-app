import useSWR from "swr";
import Layout from "@/components/Layout/layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import { useImmerLocalStorageState } from "@/resources/lib/hook/useImmerLocalStorageState";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );
  // const [favorites, setFavorites] = useImmerLocalStorageState("Favorites", {
  //   defaultValue: [],
  // });

 

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  function handleToggleFavorite(slug) {
    const artPiece = artPiecesInfo.find((piece) => piece.slug === slug);
    // setFavorites([{ ...artPieceToAdd }, ...favorites]);

    // console.log(favorites);

    if (artPiece) {
      setArtPiecesInfo(
        artPiecesInfo.map((pieceInfo) =>
          pieceInfo.slug === slug
            ? { slug, isFavorite: !pieceInfo.isFavorite }
            : pieceInfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }

    console.log(artPiecesInfo);
  }
  console.log(artPiecesInfo);

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
          onToggleFavorite={handleToggleFavorite}
        />
      </SWRConfig>
    </>
  );
}
