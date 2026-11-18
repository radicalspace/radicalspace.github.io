<script>
    import moment from "moment";
    let { data } = $props()
</script>

<h2 class="text-2xl font-bold mb-4 mt-6">Notes</h2>
    <ul>
        {#each data.notes as note (note.slug)}
            <li class="flex justify-between">
                <a href="/notes/{note.slug}" class="hover:underline">{note.title}</a>
                <time class="text-slate-500">{moment(note.date).add(1,'d').format("MM-DD-YYYY")}</time>
            </li>
        {/each}
    </ul>