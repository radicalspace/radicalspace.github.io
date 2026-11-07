import type { PageLoad } from './$types'
import { getAllPosts, getAllNotes } from '$lib/fetch'

export const load: PageLoad = async() => {
    return { posts: await getAllPosts() , notes: await getAllNotes()}
}