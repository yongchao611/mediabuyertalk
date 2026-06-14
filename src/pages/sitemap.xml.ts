import type { APIRoute } from 'astro';

// Define all site routes manually since we know them
const staticRoutes = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: 'about/', priority: '0.5', changefreq: 'monthly' },
  { path: 'faq/', priority: '0.5', changefreq: 'monthly' },
  { path: 'search/', priority: '0.3', changefreq: 'monthly' },
  { path: 'beginner/', priority: '0.9', changefreq: 'weekly' },
  { path: 'facebook-ads/', priority: '0.9', changefreq: 'weekly' },
  { path: 'google-ads/', priority: '0.9', changefreq: 'weekly' },
  { path: 'top-offers/', priority: '0.9', changefreq: 'daily' },
  { path: 'top-networks/', priority: '0.8', changefreq: 'weekly' },
  { path: 'landing-page-library/', priority: '0.8', changefreq: 'weekly' },
  { path: 'case-studies/', priority: '0.8', changefreq: 'weekly' },
  { path: 'tools/', priority: '0.8', changefreq: 'weekly' },
  { path: 'celebrities/', priority: '0.7', changefreq: 'monthly' },
  { path: 'news/', priority: '0.7', changefreq: 'weekly' },
];

// Article routes
const articleRoutes = [
  // beginner
  'beginner/what-is-affiliate-marketing/',
  'beginner/affiliate-glossary/',
  'beginner/beginner-roadmap/',
  // facebook-ads
  'facebook-ads/facebook-ads-structure/',
  // google-ads
  'google-ads/google-ads-basics/',
  // top-offers
  'top-offers/lucky-coin/',
  // top-networks
  'top-networks/mobipium-review/',
  // landing-page-library
  'landing-page-library/lucky-box-lp/',
  // case-studies
  'case-studies/fb-sweepstakes-case/',
  // tools
  'tools/bemob-tutorial/',
  // celebrities
  'celebrities/pat-flynn/',
  'celebrities/spencer-haws/',
  // news
  'news/industry-trends-2024/',
];

const SITE = 'https://affiliate-hub.vercel.app';

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map(r => `  <url>
    <loc>${SITE}/${r.path}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
${articleRoutes.map(r => `  <url>
    <loc>${SITE}/${r}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
