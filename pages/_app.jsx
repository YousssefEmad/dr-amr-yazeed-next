import "@/styles/globals.css";
import "@/styles/rtl-ltr.css";
import "@/styles/site-fixes.css";
import Layout from "@/components/Layout";
import { LocaleProvider } from "@/context/LocaleContext";

export default function App({ Component, pageProps }) {
  return (
    <LocaleProvider>
      <div className="site-font-root">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </LocaleProvider>
  );
}
