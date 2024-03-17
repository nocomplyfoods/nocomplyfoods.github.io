<script>
	import { range } from "d3";
	import { getContext } from "svelte";
	import Menu from "$components/Menu.svelte";
	import Footer from "$components/Footer.svelte";

	const items = range(15 * 3);
	const copy = getContext("copy");
	const data = getContext("data");
</script>

<!-- <h1>No Comply Foods</h1> -->

<!-- <Menu></Menu> -->
<!-- <div class="bg"></div>
<div class="grid-container">
	{#each items as item}
		<div class="grid-item">
			<div class="grid-content"></div>
		</div>
	{/each}
</div> -->

<Footer />

<style>
	.bg {
		height: 100svh;
		width: 100%;
		background-image: url("assets/bg.png");
		background-size: 50%;
		opacity: 0.2;
	}
	.grid-container {
		display: none;
		grid-template-rows: repeat(3, 1fr);
		grid-auto-flow: column;
		grid-auto-columns: 1fr;
		opacity: 0.25;
		/* display: none; */
	}

	.grid-item {
		width: 100%;
		padding-top: 100%; /* This maintains the aspect ratio to be a square */
		position: relative;
		border: 0.25vw solid var(--color-bg);
		opacity: 1;
	}

	.grid-item:nth-of-type(5n + 1) {
		background: var(--color-yellow);
	}

	.grid-item:nth-of-type(5n + 2) {
		background: var(--color-orange);
	}

	.grid-item:nth-of-type(5n + 3) {
		background: var(--color-pink);
	}

	.grid-item:nth-of-type(5n + 4) {
		background: var(--color-brown);
	}

	.grid-item:nth-of-type(5n + 5) {
		background: var(--color-gray);
	}

	.grid-content {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		/* Style your content here */
	}
</style>
