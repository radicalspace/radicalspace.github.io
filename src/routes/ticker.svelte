<script>
    import { onMount } from "svelte";
	let { states = [] } = $props();
	let elapsed = $state(0);
	onMount(() => {
		let last_time = performance.now();

		let frame = requestAnimationFrame(function update(time) {
			frame = requestAnimationFrame(update);

			elapsed += time-last_time
			last_time = time;
		});

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<span style="white-space-collapse: preserve;">{states[Math.floor(elapsed/1000)%states.length]}</span>

