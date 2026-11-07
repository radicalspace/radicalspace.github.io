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

const modules = import.meta.glob<PostModule>('/src/posts/*.md');

const slugOf = (path: string) => path.split('/').pop()!.replace('.md', '');

export function getSlugs(): string[] {
  return Object.keys(modules).map(slugOf);
}

export async function getPost(slug: string): Promise<PostModule | null> {
  const entry = Object.entries(modules).find(([path]) => slugOf(path) === slug);
  return entry ? await entry[1]() : null;
}

export async function getAllPosts(): Promise<(PostMeta & { slug: string })[]> {
  const posts = await Promise.all(
    Object.entries(modules).map(async ([path, load]) => ({
      slug: slugOf(path),
      ...(await load()).metadata
    }))
  );
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}