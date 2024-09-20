import type { LoaderFunction } from "@remix-run/cloudflare";

export const loader: LoaderFunction = async ({ request }) => {
  const host = request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("无法确定域名 URL。");
  }
  const protocol = host.includes("localhost") ? "http" : "https";
  const domain = `${protocol}://${host}`;
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${domain}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${domain}/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${domain}/software/1</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>${domain}/software/2</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.9</priority>
      </url>
      <url>
        <loc>${domain}/software/3</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.9</priority>
      </url>
    </urlset>
  `.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "xml-version": "1.0",
      "encoding": "UTF-8"
    }
  });
};