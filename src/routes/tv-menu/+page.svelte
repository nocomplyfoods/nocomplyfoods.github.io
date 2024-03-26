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
	let sidesLabel = "sides";

	const preloadFont = [
		"assets/fonts/LondrinaSolid-Black.woff2",
		"assets/fonts/SometypeMono-Medium.woff2",
		"assets/fonts/SometypeMono-Bold.woff2"
	];

	function updateLabel(data) {
		const sections = data.map((d) => d.section);
		const unique = [...new Set(sections)];
		console.log(unique);
		if (unique.length === 2) sidesLabel = "Apps & Sides";
		else if (unique.length === 1) sidesLabel = unique[0];
		else sidesLabel = "Sides";
	}

	function prepareData(data, backup) {
		const valid = data.items.filter((d) => d.item);
		mains = valid.filter((d) => d.section === "main");
		sides = valid.filter((d) => d.section === "side" || d.section === "app");

		hasSides = sides.length > 0;

		const maxItems = hasSides ? 5 : 8;
		const overflow = Math.max(0, mains.length - maxItems);
		const rate = hasSides ? 0.1 : 0.075;
		scale = 1 - overflow * rate;

		if (hasSides) {
			updateLabel(sides);
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
		<p class="allergy">
			Please inform us of any allergies. Consuming raw or undercooked meats,
			poultry, seafood, shellfish, or eggs may increase your risk of foodborne
			illness.
		</p>
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
					{@html sidesLabel}<span class="price"
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
		--fs-big: 2.75vw;
		--fs-small: 1.75vw;
		--padding: 2vw;
		--shadow: 0.15vw;
		--color-fg: #000;
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
		display: none;
		position: absolute;
		top: 0.5vw;
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

	.allergy {
		position: absolute;
		bottom: var(--padding);
		/* left: var(--padding); */
		left: 0;
		text-align: center;
		width: 100%;
		font-size: 1.075vw;
		opacity: 0.7;
		line-height: 1;
		margin: 0;
		/* right: var(--padding);
		top: var(--padding);
		max-width: 35%;
		left: auto;
		text-align: right; */

		/* max-width: 50%; */
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
