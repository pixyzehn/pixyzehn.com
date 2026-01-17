import type { CollectionEntry } from 'astro:content';

export type TagInput = string | string[] | undefined | null;

export function normalizeTags(value: TagInput): string[] {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value.flatMap((tag) => tag.split(/\s+/)).filter(Boolean);
  }
  return value.split(/\s+/).filter(Boolean);
}

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function getTagList(posts: CollectionEntry<'posts'>[]): string[] {
  const tagSet = new Set<string>();
  for (const post of posts) {
    for (const tag of normalizeTags(post.data.tags)) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
}
