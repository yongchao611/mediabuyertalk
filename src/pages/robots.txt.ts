import type { APIRoute } from 'astro';

const SITE = 'https://affiliate-hub.vercel.app';

export const GET: APIRoute = () => {
  const robots = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /search/

Sitemap: ${SITE}/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
