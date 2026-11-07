import type { Component } from 'svelte';

export interface PostMeta {
  title: string;
  date: string;
  description?: string;
}

interface PostModule {
  default: Component;
  metadata: PostMeta;
}

const postMod = import.meta.glob<PostModule>('/src/posts/*.md');
const noteMod = import.meta.glob<PostModule>('/src/notes/*.md');

const slugOf = (path: string) => path.split('/').pop()!.replace('.md', '');

export function getSlugs(): string[] {
  return Object.keys(postMod).map(slugOf).concat(Object.keys(noteMod).map(slugOf));
}

export async function getPost(slug: string): Promise<PostModule | null> {
  const entry = Object.entries(postMod).find(([path]) => slugOf(path) === slug);
  return entry ? await entry[1]() : null;
}

export async function getAllPosts(): Promise<(PostMeta & { slug: string })[]> {
  const posts = await Promise.all(
    Object.entries(postMod).map(async ([path, load]) => ({
      slug: slugOf(path),
      ...(await load()).metadata
    }))
  );
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getNote(slug: string): Promise<PostModule | null> {
  const entry = Object.entries(noteMod).find(([path]) => slugOf(path) === slug);
  return entry ? await entry[1]() : null;
}

export async function getAllNotes(): Promise<(PostMeta & { slug: string })[]> {
  const posts = await Promise.all(
    Object.entries(noteMod).map(async ([path, load]) => ({
      slug: slugOf(path),
      ...(await load()).metadata
    }))
  );
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}