<script>
	import { onMount } from "svelte";
	import { dev } from "$app/environment";
	import { timeFormat } from "d3";
	import { TriangleAlert } from "lucide-svelte";
	import Meta from "$components/Meta.svelte";
	import Mains from "$components/Mains.svelte";
	import Sides from "$components/Sides.svelte";
	import getParam from "$utils/getParam.js";
	import storage from "$utils/localStorage.js";
	// TODO no meta hide from stuff

	let hasData;
	let hasSides;
	let mains = [];
	let sides = [];
	let scale = 1;
	let sidesSamePrice = false;
	let sidePrice;
	let lastUpdate;
	let updated;
	let split;
	let error;

	const preloadFont = [
		"assets/fonts/londrina/LondrinaSolid-Black.woff2",
		"assets/fonts/sometype/SometypeMono-Medium.woff2",
		"assets/fonts/sometype/SometypeMono-Bold.woff2"
	];

	function prepareData(data, backup) {
		const valid = data.items.filter((d) => d.item);
		mains = valid.filter((d) => d.section === "main");

		// TODO remove if google
		mains.sort((a, b) => a.order - b.order);
		sides = valid.filter((d) => d.section === "side");

		hasSides = sides.length > 0;

		const maxItems = hasSides ? 5 : 8;
		const overflow = Math.max(0, mains.length - maxItems);
		const rate = hasSides ? 0.1 : 0.075;
		scale = 1 - overflow * rate;

		if (hasSides) {
			sidePrice = sides[0].price;
			sidesSamePrice = sides.every((d) => d.price === sidePrice);
		}

		updated = timeFormat("%B %d, %I:%M %p")(new Date(data.updated));
	}

	async function updateMenu() {
		try {
			const res = await fetch(
				`https://data.nocomplyfoods.com/menu.json?version=${Date.now()}`
			);
			const data = await res.json();

			const valid = data.items.filter((d) => d.item);

			hasData = valid.length > 0;

			// TODO figure out flow here

			if (hasData) {
				if (lastUpdate !== data.updated) {
					lastUpdate = data.updated;
					storage.set("nocomply_menu", data);
					prepareData(data);
				}
			} else {
				throw new Error("no data");
			}
		} catch (err) {
			console.log(err?.message);
			error = err?.message;
			const data = storage.get("nocomply_menu");
			if (data) prepareData(data, true);
		} finally {
			setTimeout(updateMenu, 30000);
		}
	}

	async function wakeLock() {
		try {
			if ("wakeLock" in navigator) {
				await navigator.wakeLock.request("screen");
			}
		} catch (err) {
			console.log(err);
		}
	}

	onMount(async () => {
		split = getParam("split");
		await updateMenu();
		await wakeLock();
	});
</script>

<div class:split style="--scale: {scale};">
	{#if hasData}
		<p class="updated">{updated}</p>
		{#if error}<p class="error">
				<TriangleAlert></TriangleAlert> <span>{error}</span>
			</p>{/if}
		<section class="mains">
			<h1>No<br />Comply<br />Foods</h1>
			<Mains data={mains} {split} {hasSides}></Mains>
		</section>

		{#if hasSides}
			<section class="sides">
				<p class="title">
					Sides<span class="price"
						>{sidesSamePrice ? ` $${sidePrice}` : ""}</span
					>
				</p>
				<Sides data={sides} uniform={sidesSamePrice} {split} />
				<h1>No<br />Comply<br />Foods</h1>
			</section>
		{/if}
	{/if}
</div>

<style>
	div {
		width: 100vw;
		height: 100vh;
		background: #fff;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		--fs-big: 3vw;
		--fs-small: 2vw;
		--padding: 2vw;
		--shadow: 0.15vw;
		--color-fg: #000;
		--color-pink: #ff8095;
		--color-yellow: #ffdf80;
	}

	h1 {
		font-size: calc(var(--fs-big));
		margin-bottom: var(--padding);
		position: relative;
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
		opacity: 0.35;
	}

	.mains:before {
		background-color: var(--color-pink);
	}

	.sides:before {
		background-color: var(--color-yellow);
	}

	.sides h1 {
		display: none;
	}

	.sides .title {
		text-align: center;
		font-size: calc(var(--fs-big) * var(--scale));
		font-weight: 700;
		text-transform: uppercase;
		position: relative;
		margin: 0 auto calc(var(--padding) * var(--scale)) auto;
		text-shadow: var(--shadow) var(--shadow) var(--color-yellow);
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

	.error {
		position: absolute;
		bottom: 0.5vw;
		left: 0.5vw;
		font-size: 1vw;
		opacity: 0.5;
		line-height: 1;
		margin: 0;
		display: flex;
		align-items: center;
	}

	.error span {
		margin-left: 0.5vw;
	}

	/* div.split {
		flex-direction: row;
	} */

	/* .split .mains {
		height: auto;
		min-height: none;
		max-height: none;
		width: 66.6%;
		min-width: 66.6%;
		max-width: 66.6%;
	} */

	/* .split .mains h1 {
		display: none;
	} */

	/* .split .sides h1 {
		display: block;
		position: absolute;
		bottom: var(--padding);
		right: var(--padding);
		margin: 0;
	} */

	/* .split .updated {
		right: auto;
		left: 0.5vw;
	} */
</style>
