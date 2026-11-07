import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import { getPost, getSlugs } from '$lib/posts';

export const entries: EntryGenerator = () => getSlugs().map((slug) => ({ slug }));

export const load: PageLoad = async ({ params }) => {
  const post = await getPost(params.slug);
  if (!post) error(404, 'Post not found');

  return { content: post.default, meta: post.metadata };
};