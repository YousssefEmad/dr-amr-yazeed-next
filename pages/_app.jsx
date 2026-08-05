import { Cairo } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/rtl-ltr.css";
import "@/styles/site-fixes.css";
import Layout from "@/components/Layout";
import { LocaleProvider } from "@/context/LocaleContext";

/** Single site font — Cairo for Arabic + Latin, self-hosted by next/font */
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-cairo",
  fallback: ["Tahoma", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export default function App({ Component, pageProps }) {
  return (
    <LocaleProvider>
      <div className={`${cairo.variable} ${cairo.className} site-font-root`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </LocaleProvider>
  );
}
