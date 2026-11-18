import type { PageLoad } from './$types'
import {getAllNotes } from '$lib/fetch'

export const load: PageLoad = async() => {
    return {notes: await getAllNotes()}
}