import Head from "next/head";
import { siteConfig } from "@/data/site";
import { useLocale } from "@/context/LocaleContext";
import { pick } from "@/lib/i18n";

export default function SEO({
  title,
  description,
  image,
  path = "/",
  type = "website",
  noIndex = false,
}) {
  const { locale } = useLocale();
  const brand = pick(siteConfig, "name", locale);
  const fullTitle = title
    ? `${title} | ${brand}`
    : pick(siteConfig, "title", locale);
  const desc = description || pick(siteConfig, "description", locale);
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ? `${siteConfig.url}${image}` : `${siteConfig.url}${siteConfig.logo}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      <link rel="alternate" hrefLang="ar" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={brand} />
      <meta property="og:locale" content={locale === "en" ? "en_US" : "ar_EG"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="theme-color" content={siteConfig.themeColor} />
    </Head>
  );
}
