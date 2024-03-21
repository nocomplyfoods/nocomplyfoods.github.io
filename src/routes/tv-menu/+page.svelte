<script>
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import Mains from "$components/Mains.svelte";
	import Sides from "$components/Sides.svelte";
	import getParam from "$utils/getParam.js";
	// TODO no meta hide from stuff

	let hasData;
	let mains = [];
	let sides = [];
	let sidesSamePrice = false;
	let sidePrice;
	let updated;
	let split;

	const preloadFont = [
		"assets/fonts/londrina/LondrinaSolid-Black.woff2",
		"assets/fonts/sometype/SometypeMono-Medium.woff2",
		"assets/fonts/sometype/SometypeMono-Bold.woff2"
	];

	async function updateMenu() {
		try {
			const res = await fetch(
				`https://data.nocomplyfoods.com/menu.json?version=${Date.now()}`
			);
			const data = await res.json();
			const valid = data.items.filter((d) => d.price && d.item);
			hasData = valid.length > 0;
			mains = valid.filter((d) => d.section === "main");
			mains.sort((a, b) => b.price - a.price);
			sides = valid.filter((d) => d.section === "side");
			sidePrice = sides[0].price;
			sidesSamePrice = sides.every((d) => d.price === sidePrice);
			updated = data.updated;
		} catch (err) {
			console.log(err);
		} finally {
			setTimeout(updateMenu, 60000);
		}
	}

	$: sideW = hasData
		? `${Math.floor((1 / Math.ceil(sides.length / 2)) * 100)}%`
		: "none";
	onMount(async () => {
		split = getParam("split");
		await updateMenu();
	});
</script>

<div class:split style="--side-width: {sideW};">
	{#if hasData}
		<p class="updated">{updated}</p>
		<section class="mains">
			<Mains {mains} {split}></Mains>
		</section>

		<section class="sides">
			<p class="title">Sides{sidesSamePrice ? ` $${sidePrice}` : ""}</p>
			<Sides {sides} {sidesSamePrice} {split} />
		</section>
	{/if}
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
		background: #fff;
		display: flex;
		flex-direction: column;
		--fs-big: 3vw;
		--fs-small: 2vw;
		--padding: 2vw;
	}

	div.split {
		flex-direction: row;
	}

	p {
		margin: 0;
		line-height: 1;
	}

	section {
		position: relative;
		padding: var(--padding);
		flex: 1;
	}

	section:before {
		content: "";
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.25;
	}

	.mains:before {
		background-color: var(--color-pink);
	}

	.sides:before {
		background-color: var(--color-yellow);
	}

	.mains {
		min-height: 60%;
	}

	.split .mains {
		height: auto;
		min-height: none;
		max-height: none;
		width: 66.6%;
		min-width: 66.6%;
		max-width: 66.6%;
	}

	.updated {
		position: absolute;
		bottom: 0.5vw;
		right: 0.5vw;
		font-size: 1vw;
		opacity: 0.5;
		line-height: 1;
		margin: 0;
	}

	.sides .title {
		text-align: center;
		font-size: var(--fs-big);
		font-weight: 700;
		text-transform: uppercase;
		position: relative;
		margin: 0 auto calc(var(--padding) * 1) auto;
	}
</style>
