<script>
    import moment from 'moment';
    import profile from '#lib/assets/me.jpeg';
    let { data } = $props()
    let leftCol = $state(0);
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
    <div class="md:col-span-2">
        <h1 class="text-3xl font-bold mb-6 mt-8">Leandros Dimitropoulos</h1>
        <p class="text-justify">Hello! I'm a 1st year undergraduate student at UC Berkeley studying Computer Science and Mathematics. 
            My interests are broad, but are loosely centered around understanding the mathematical foundations of computing. If you would like to learn more please shoot me an email! :)</p>
        <div class="flex text-center border border-slate-200 mt-4 p-2">
            <button onclick={()=>{leftCol=0}} class="flex-1  border-slate-200 hover:cursor-pointer {leftCol==0 ? 'underline' : ''}">posts</button>
            <div class="flex-none text-slate-200">/</div>
            <button onclick={()=>{leftCol=1}} class="flex-1 border-slate-200 hover:cursor-pointer {leftCol==1 ? 'underline' : ''}">notes</button>
            <div class="flex-none text-slate-200">/</div>
            <button onclick={()=>{leftCol=2}} class="flex-1 border-slate-200 hover:cursor-pointer {leftCol==2 ? 'underline' : ''}">misc.</button>
        </div>
        {#if leftCol==0}
            <h2 class="text-2xl font-bold mb-4 mt-6">Posts</h2>
            <ul>
                {#each data.posts as post (post.slug)}
                    <li class="flex justify-between">
                        <a href="/blog/{post.slug}" class="hover:underline">{post.title}</a>
                        <time class="text-slate-500">{moment(post.date).add(1,'d').format("MM-DD-YYYY")}</time>
                    </li>
                {/each}
            </ul>
        {:else if leftCol==1}
            <h2 class="text-2xl font-bold mb-4 mt-6">Notes</h2>
            <ul>
                {#each data.notes as note (note.slug)}
                    <li class="flex justify-between">
                        <a href="/notes/{note.slug}" class="hover:underline">{note.title}</a>
                        <time class="text-slate-500">{moment(note.date).add(1,'d').format("MM-DD-YYYY")}</time>
                    </li>
                {/each}
            </ul>
        {:else}
            <h2 class="text-2xl font-bold mb-4 mt-6">Misc.  </h2>
        {/if}
    </div>
    <div class="md:col-span-1 space-y-4">
        <img src={profile} alt="Me!" class="w-full border" />
        <div class="text-sm mb-2 text-slate-600">
            leandros [at] berkeley [dot] edu
        </div>
        <h3 class="font-bold text-lg mb-2">About Me</h3>
        <p class="text-sm text-slate-600 leading-relaxed">
            Still working on this website!! (⁠*⁠﹏⁠*⁠;⁠)
        </p>
    </div>
</div>
