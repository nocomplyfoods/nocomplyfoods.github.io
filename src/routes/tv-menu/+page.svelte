<script>
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	// TODO no meta hide from stuff
	let w, h;
	onMount(() => {
		w = window.innerWidth;
		h = window.innerHeight;
	});

	const preloadFont = [
		"assets/fonts/londrina/LondrinaSolid-Black.woff2",
		"assets/fonts/londrina/LondrinaSolid-Regular.woff2",
		"assets/fonts/sometype/SometypeMono-Bold.woff2",
		"assets/fonts/sometype/SometypeMono-Regular.woff2"
	];
</script>

<h1>Menu</h1>
<p>{w} x {h}</p>
