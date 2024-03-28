<script>
	import testMenu from "$data/menu.csv";
	import { onMount } from "svelte";
	import { timeFormat } from "d3";
	import { TriangleAlert } from "lucide-svelte";
	import Mains from "$components/Mains.svelte";
	import Sides from "$components/Sides.svelte";
	import getParam from "$utils/getParam.js";
	import storage from "$utils/localStorage.js";

	// TODO no meta hide from stuff for
	export let web;

	let hasData;
	let hasSides;
	let mains = [];
	let sides = [];
	let scale = 1;
	let sidesSamePrice = false;
	let sidePrice;
	let lastUpdate;
	let updated;
	let error;
	let sidesLabel = "sides";

	function updateLabel(data) {
		const sections = data.map((d) => d.section);
		const unique = [...new Set(sections)];
		if (unique.length === 2) sidesLabel = "Apps & Sides";
		else if (unique.length === 1) sidesLabel = `${unique[0]}s`;
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
		scale = web ? 1 : 1 - overflow * rate;

		if (hasSides) {
			updateLabel(sides);
			sidePrice = sides[0].price;
			sidesSamePrice = sides.every((d) => d.price === sidePrice);
		}

		updated = timeFormat("%B %d, %I:%M %p")(new Date(data.updated));
	}

	async function updateMenu() {
		try {
			// const res = await fetch(
			// 	`https://data.nocomplyfoods.com/menu.json?version=${Date.now()}`
			// );
			// const data = await res.json();
			const data = { updated: "test", items: testMenu };

			const valid = data.items.filter((d) => d.item);

			hasData = valid.length > 0;

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
			if (!web) setTimeout(updateMenu, 30000);
		}
	}

	onMount(async () => {
		await updateMenu();
	});
</script>

<div class:web style="--scale: {scale};">
	{#if hasData}
		<p class="updated">{updated}</p>
		{#if error}<p class="error">
				<TriangleAlert></TriangleAlert> <span>{error}</span>
			</p>{/if}
		<section class="mains">
			<Mains {web} data={mains} {hasSides}></Mains>
		</section>

		{#if hasSides}
			<section class="sides">
				<p class="title">
					{@html sidesLabel}<span class="price"
						>{sidesSamePrice ? ` $${sidePrice}` : ""}</span
					>
				</p>
				<Sides data={sides} uniform={sidesSamePrice} />
			</section>
		{/if}

		{#if !web}
			<section class="allergy" class:sides={hasSides}>
				<p>
					Please inform us of any allergies. Consuming raw or undercooked meats,
					poultry, seafood, shellfish, or eggs may increase your risk of
					foodborne illness.
				</p>
			</section>
		{/if}
	{/if}
</div>

<style>
	div {
		--fs-big: 3vw;
		--fs-small: 2vw;
		--padding: 2vw;
		--shadow: 0.15vw;
		--opacity: 0.65;
		width: 100vw;
		height: 100vh;
		background: #fff;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		pointer-events: none;
		user-select: none;
	}

	div.web {
		--fs-big: clamp(16px, 1.5vw, 24px);
		--fs-small: clamp(14px, 1.25vw, 20px);
		--padding: 16px;
		width: auto;
		height: auto;
		background: transparent;
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
	}

	.mains:before {
		background-color: var(--color-pink);
		opacity: 0.35;
	}

	.sides:before {
		background-color: var(--color-yellow);
		opacity: 0.4;
	}

	.allergy:before {
		background-color: var(--color-pink);
		opacity: 0.35;
	}

	.allergy.sides:before {
		background-color: var(--color-yellow);
		opacity: 0.4;
	}

	.web section:before {
		background: transparent;
	}

	.mains {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
	}

	.allergy {
		flex: 0;
	}

	.allergy p {
		font-size: 1.075vw;
		line-height: 1;
		margin: 0;
		text-align: center;
	}

	.sides .title {
		text-align: center;
		font-size: calc(var(--fs-big) * var(--scale));
		font-weight: 700;
		text-transform: uppercase;
		position: relative;
		margin: 0 auto calc(var(--padding) * var(--scale)) auto;
		opacity: var(--opacity);
		/* text-shadow: var(--shadow) var(--shadow) var(--color-yellow); */
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
</style>
