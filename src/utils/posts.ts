import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import { toDate } from './dates';
import { normalizeTags } from './tags';

const DATE_PREFIX = /^\d{4}-\d{2}-\d{2}-/;

export function getPostSlug(post: CollectionEntry<'posts'>): string {
  return post.slug.replace(DATE_PREFIX, '');
}

export function getPostDate(post: CollectionEntry<'posts'>): Date {
  return toDate(post.data.date);
}

export function getPostTags(post: CollectionEntry<'posts'>): string[] {
  return normalizeTags(post.data.tags);
}

export async function getAllPosts(): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => getPostDate(b).getTime() - getPostDate(a).getTime());
}
