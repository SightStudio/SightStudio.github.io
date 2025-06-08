import { getRssString } from '@astrojs/rss';

import { SITE, METADATA, APP_BLOG } from 'astrowind:config';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const GET = async () => {
  if (!APP_BLOG.isEnabled) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found',
    });
  }

  const posts = await fetchPosts();

  const rss = await getRssString({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description || '',
    site: import.meta.env.SITE,

    items: posts.map((post) => ({
      link: getPermalink(post.permalink, 'post'),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate,
    })),

    trailingSlash: SITE.trailingSlash,
    
    // RSS 피드 갱신 정보 추가
    customData: `
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <generator>SightStudio Blog - Astro</generator>
      <webMaster>sdm3285@gmail.com (SightStudio)</webMaster>
    `,
  });

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
