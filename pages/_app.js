import useSWR from "swr";
import Layout from "@/components/Layout/layout";
import GlobalStyle from "../styles";
import "../app.css";
import { useStore } from "@/components/store";
import { useEffect } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, setData } = useStore();

  const { data: swrData, error, isLoading } = useSWR(URL, fetcher);

  useEffect(() => {
    if (swrData) {
      setData(swrData);
    }
  }, [swrData, setData]);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component {...pageProps} />
    </>
  );
}
