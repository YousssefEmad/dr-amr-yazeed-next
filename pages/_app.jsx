import "@/styles/globals.css";
import "@/styles/rtl-ltr.css";
import Layout from "@/components/Layout";
import { LocaleProvider } from "@/context/LocaleContext";

export default function App({ Component, pageProps }) {
  return (
    <LocaleProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LocaleProvider>
  );
}