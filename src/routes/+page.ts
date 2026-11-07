import type { PageLoad } from './$types'
import { getAllPosts } from '$lib/posts'

export const load: PageLoad = async() => {
    return { posts: await getAllPosts() }
}