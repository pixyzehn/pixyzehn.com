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
