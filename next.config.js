/** @type {import('next').NextConfig} */
const nextConfig = {
  // static HTML export -> ارفع محتويات مجلد "out" على هوستنجر مباشرة (public_html)
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // مطلوبة مع output:export لأن مُحسِّن صور Next محتاج سيرفر Node
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
