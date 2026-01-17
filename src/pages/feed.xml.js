import rss from '@astrojs/rss';
import { site } from '../data/site';
import { getAllPosts, getPostSlug } from '../utils/posts';
import { toDate } from '../utils/dates';

export async function GET() {
  const posts = await getAllPosts();

  return rss({
    title: site.title,
    description: site.description,
    site: site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: toDate(post.data.date),
      link: `/articles/${getPostSlug(post)}.html`
    }))
  });
}
