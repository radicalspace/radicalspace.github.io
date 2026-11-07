<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/me.jpeg';
	import type { LayoutProps } from './$types';
	import 'katex/dist/katex.min.css';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="font-hacker">
	<div class="max-w-3xl mx-auto px-6 py-6 md:px-12 md:py-12">
		{@render children()}
		<div class="border-t border-slate-200 mt-6 pt-6 text-sm text-slate-500 flex justify-between">
			<div>Made with <a href="https://svelte.dev" target="_blank" class="hover:underline decoration-orange-300 decoration-2">Svelte!</a></div>
			<div>
				<div class="flex"><a class="mr-4 hover:underline decoration-slate-500" href="https://github.com/radicalspace">Github</a><a class="hover:underline decoration-slate-500" href="https://linkedin.com/in/ldimitrop">LinkedIn</a></div>
			</div>
		</div>
	</div>
</div>
