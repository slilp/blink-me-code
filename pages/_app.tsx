import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ScrollToTop></ScrollToTop>
    </Layout>
  );
}
export default MyApp;
