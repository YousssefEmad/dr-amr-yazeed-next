import { Cairo, DM_Sans, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/rtl-ltr.css";
import "@/styles/site-fixes.css";
import Layout from "@/components/Layout";
import { LocaleProvider } from "@/context/LocaleContext";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cairo",
  adjustFontFallback: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-playfair",
  adjustFontFallback: true,
});

export default function App({ Component, pageProps }) {
  return (
    <LocaleProvider>
      <div className={`${cairo.variable} ${dmSans.variable} ${playfair.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </LocaleProvider>
  );
}
