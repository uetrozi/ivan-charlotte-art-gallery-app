import useSWR from "swr";
import { useState } from "react";
import Layout from "@/components/Layout/layout";

import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;


  return (
    <>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 1000,
        }}
      >
        <GlobalStyle />
        <Layout/>
        <Component {...pageProps} data={data} />
      </SWRConfig>
    </>
  );
}
