import Head from "next/head";
import { siteConfig } from "@/data/site";

/**
 * مكوّن SEO عام لكل الصفحات
 * بيتضاف Title / Description / Open Graph / Twitter Card / hreflang (ar-eg / en)
 */
export default function SEO({
  title,
  description,
  image,
  path = "/",
  type = "website",
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const desc = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ? `${siteConfig.url}${image}` : `${siteConfig.url}${siteConfig.logo}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* hreflang */}
      <link rel="alternate" hrefLang="ar" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content="ar_EG" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="theme-color" content={siteConfig.themeColor} />
    </Head>
  );
}
