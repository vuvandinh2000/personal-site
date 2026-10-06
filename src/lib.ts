import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n/ui';

export type Post = CollectionEntry<'posts'>;

/** "en/2026-10-learning-how-to-learn" -> { lang: "en", slug: "2026-10-learning-how-to-learn" } */
export function splitId(id: string) {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
}

export async function getPosts(lang: Lang) {
  const all = await getCollection('posts', (p) => !p.data.draft || import.meta.env.DEV);
  return all
    .filter((p) => splitId(p.id).lang === lang)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function hasTranslation(slug: string, lang: Lang) {
  const all = await getCollection('posts');
  return all.some((p) => p.id === `${lang}/${slug}`);
}

export function readingMinutes(body = '') {
  const words = body.replace(/<[^>]+>|import .*|export .*/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export const SERIES = ['mentoring'] as const;
