<script>
	import { max } from "d3";
	import { onMount } from "svelte";
	import Mains from "$components/Mains.svelte";
	import Sides from "$components/Sides.svelte";

	// TODO no meta hide from stuff for
	export let web;
	export let items;

	let hasSides;
	let mains = [];
	let sides = [];
	let scale = 1;
	let scaleDetail = 1;
	let sidesSamePrice = false;
	let sidePrice;
	let lastUpdate;
	let sidesTitle = "sides";
	let updatedDisplay = "";

	function updateLabel(data) {
		const sections = data.map((d) => d.section);
		const unique = [...new Set(sections)];
		if (unique.length === 2) sidesTitle = "Apps & Sides";
		else if (unique.length === 1) sidesTitle = `${unique[0]}s`;
		else sidesTitle = "Sides";
	}

	function prepareMenu(items) {
		mains = items
			.filter((d) => d.section === "main" || d.section === "header")
			.map((d) => ({
				...d,
				header: d.section === "header",
				price: d.price?.replace(
					" per person",
					"<span class='per'>per person</span>"
				)
			}));

		sides = items.filter(
			(d) =>
				d.section === "side" || d.section === "app" || d.section === "dessert"
		);

		hasSides = sides.length > 0;

		const maxItems = hasSides ? 5 : 8;
		const overflow = Math.max(0, mains.length - maxItems);
		const rateName = hasSides ? 0.065 : 0.06;
		const rateDetail = 0.07;
		scale = web ? 1 : 1 - overflow * rateName;
		scaleDetail = web ? 1 : 1 - overflow * rateDetail;

		const maxItemLen = max(mains.map((d) => d.item.length));
		const maxDetailLen = max(mains.map((d) => d.detail?.length || 0));
		if (scale > 0.9 && maxItemLen > 20) scale = web ? 0.9 : 20 / maxItemLen;
		if (scaleDetail > 0.9 && maxDetailLen > 40)
			web ? 0.9 : (scaleDetail = 44 / maxDetailLen);

		if (hasSides) {
			updateLabel(sides);
			sidePrice = sides[0].price;
			sidesSamePrice = sides.every((d) => d.price === sidePrice);
		}
	}

	$: prepareMenu(items);
</script>

<div class:web style="--scale: {scale}; --scale-detail: {scaleDetail};">
	<section class="mains">
		<Mains {web} data={mains}></Mains>
	</section>

	{#if hasSides}
		<section class="sides">
			<p class="title">
				{@html sidesTitle}<span class="price"
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
				poultry, seafood, shellfish, or eggs may increase your risk of foodborne
				illness.
			</p>
		</section>
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
		background-color: var(--color-pink-lighter);
	}

	.sides:before {
		background-color: var(--color-yellow-lighter);
	}

	.allergy:before {
		background-color: var(--color-pink-lighter);
	}

	.allergy.sides:before {
		background-color: var(--color-yellow-lighter);
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

	.sides {
		flex: 0;
	}

	.allergy {
		flex: 0;
	}

	.allergy p {
		font-size: 1.075vw;
		line-height: 1;
		margin: 0;
		text-align: center;
		position: relative;
		opacity: 0.6;
	}

	.sides .title {
		text-align: center;
		font-size: calc(var(--fs-big) * var(--scale));
		font-weight: 700;
		text-transform: uppercase;
		position: relative;
		margin: 0 auto calc(var(--padding) * var(--scale)) auto;
		opacity: var(--opacity);
	}
</style>
