import type { PageLoad } from './$types'
import { getAllPosts } from '$lib/fetch'

export const load: PageLoad = async() => {
    return { posts: await getAllPosts()}
}