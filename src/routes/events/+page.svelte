<script>
	import { onMount } from "svelte";
	import Meta from "$components/Meta.svelte";
	import Events from "$components/Events.svelte";

	// TODO no meta hide from stuff
	let updated;
	let items = [];

	const preloadFont = [
		"../assets/fonts/LondrinaSolid-Black.woff2",
		"../assets/fonts/SometypeMono-Medium.woff2",
		"../assets/fonts/SometypeMono-Bold.woff2"
	];
</script>

<Meta {preloadFont} hide={true}></Meta>

<div class="c">
	<h1>No<br />Comply<br />Foods</h1>

	<section>
		<Events></Events>
	</section>
</div>

<style>
	h1 {
		padding: 16px;
		text-align: left;
		padding-top: 32px;
	}

	section {
		width: 90%;
		margin: 32px auto;
	}
</style>
