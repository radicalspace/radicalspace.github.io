<script lang="ts"> 
  import moment from "moment";
  let { data } = $props();
  const Content = $derived(data.content);
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta name="description" content={data.meta.description} />
</svelte:head>
<div class="mb-6"><a href="/" class="hover:underline"> ﹤ Back </a></div>
<article class="prose">
  <h1>{data.meta.title}</h1>
  <time>Uploaded on {moment(data.meta.date).format("dddd, MMMM Do YYYY")}</time>
  <Content />
</article>