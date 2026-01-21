<script>
	import { onMount } from "svelte";
	import Meta from "$components/Meta.svelte";

	let time = "";
	onMount(() => {
		const now = new Date();
		const raw = now.toLocaleTimeString();
		// just hours and minutes with am/pm
		time = raw.replace(/:\d{2}\s/, " ");

		setTimeout(() => {
			window.location.reload();
		}, 60000);
	});
</script>

<Meta hide={true}></Meta>

<div class="c">
	<h1>{time}</h1>
</div>

<style>
	.c {
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	h1 {
		margin: 0;
		transform: translate(0, -37.5%);
		font-size: 15vw;
	}
</style>
