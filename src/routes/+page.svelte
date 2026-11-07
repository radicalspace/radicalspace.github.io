<script>
    import moment from 'moment';
    import profile from '#lib/assets/me.jpeg';
    let { data } = $props()
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
    <div class="md:col-span-2">
        <h1 class="text-3xl font-bold mb-6 mt-8">Leandros Dimitropoulos</h1>
        <p class="text-justify">Hello! I'm a 1st year undergraduate student at UC Berkeley studying Computer Science and Mathematics. 
            My interests are broad, but are loosely centered around understanding the mathematical foundations of computing. If you would like to learn more please shoot me an email! :)</p>
        <h2 class="text-2xl font-bold mb-4 mt-6">Posts</h2>
        <ul>
            {#each data.posts as post (post.slug)}
                <li class="flex justify-between">
                    <a href="/blog/{post.slug}" class="hover:underline">{post.title}</a>
                    <time class="text-slate-500">{moment(data.date).format("MM-DD-YYYY")}</time>
                </li>
            {/each}
        </ul>
    </div>
    <div class="md:col-span-1 space-y-4">
        <img src={profile} alt="Me!" class="w-full border-1" />
        <div class="text-sm mb-2 text-slate-600">
            leandros [at] berkeley [dot] edu
        </div>
        <h3 class="font-bold text-lg mb-2">About Me</h3>
        <p class="text-sm text-slate-600 leading-relaxed">
            Still working on this website!! (⁠*⁠﹏⁠*⁠;⁠)
        </p>
    </div>
</div>
