import { getAllNewsPosts } from "@/lib/news";

export async function GET() {
  const posts = getAllNewsPosts();
  const siteUrl = "https://hauntly.me";

  const items = posts
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/news/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/news/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>hello@frumpets.co (Hauntly Team)</author>
    </item>`
    )
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Hauntly — Ghost Hunting App News</title>
    <link>${siteUrl}</link>
    <description>Latest news, app updates, ghost hunting tips, and paranormal investigation guides from Hauntly.</description>
    <language>en-us</language>
    <managingEditor>hello@frumpets.co (Hauntly Team)</managingEditor>
    <webMaster>hello@frumpets.co (Hauntly Team)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/logo3.png</url>
      <title>Hauntly</title>
      <link>${siteUrl}</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
