import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Website configuration
const siteUrl = 'https://bludora.vercel.app';
const pages = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'daily',
    lastmod: new Date().toISOString(),
  },
  {
    url: '/about',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: new Date().toISOString(),
  },
  {
    url: '/services',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: new Date().toISOString(),
  },
  {
    url: '/work',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString(),
  },
  {
    url: '/selected-work',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: new Date().toISOString(),
  },
  {
    url: '/contact',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: new Date().toISOString(),
  },
];

// Generate XML sitemap
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
}

// Generate robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Sitemap
Sitemap: ${siteUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1`;
}

// Ensure dist directory exists
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Generate and write sitemap
const sitemap = generateSitemap();
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);

// Generate and write robots.txt
const robotsTxt = generateRobotsTxt();
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);

console.log('✅ Sitemap generated successfully!');
console.log('📄 sitemap.xml created in dist/');
console.log('🤖 robots.txt created in dist/');
console.log(`🌐 Site URL: ${siteUrl}`);
console.log(`📊 Total pages: ${pages.length}`);

// Also copy to public directory for development
const publicDir = path.join(__dirname, '..', 'public');
if (fs.existsSync(publicDir)) {
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('📁 Files also copied to public/ directory');
}
