/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.dramryazeed.com",
  generateRobotsTxt: true,
  outDir: "./out", // مع output:export بيتولد الموقع في مجلد out
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
};
