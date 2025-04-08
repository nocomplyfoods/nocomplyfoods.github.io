<script>
	import { max } from "d3";
	import { onMount } from "svelte";
	import Mains from "$components/Mains.svelte";

	// TODO no meta hide from stuff for
	export let web;
	export let items;
	export let drinks;

	let mains = [];
	let scale = 1;
	let scaleDetail = 1;
	let lastUpdate;
	let updatedDisplay = "";

	function updateLabel(data) {
		const types = data.map((d) => d.type);
		const unique = [...new Set(types)];
	}

	function prepareMenu(items) {
		mains = items
			.filter(
				(d) => d.type === "item" || d.type === "header" || d.type === "note"
			)
			.map((d) => ({
				...d,
				header: d.type === "header",
				note: d.type === "note",
				price: d.price?.replace(
					" per person",
					"<span class=per>per person</span>"
				)
			}));

		const maxItems = 8;
		const overflow = Math.max(0, mains.length - maxItems);
		const rate = 0.07;
		const decrease = 1 - overflow * rate;
		scale = web ? 1 : decrease;
		scaleDetail = web ? 1 : decrease;

		const maxItemLen = max(mains.map((d) => d.name.length));
		const maxDetailLen = max(mains.map((d) => d.detail?.length || 0));

		if (maxItemLen > 20) scale = Math.min(scale, web ? 0.8 : 20 / maxItemLen);
		if (maxDetailLen > 40)
			scaleDetail = Math.min(scaleDetail, web ? 0.9 : 40 / maxDetailLen);

		scale = Math.max(scale, drinks ? 0.55 : 0.6);
		scaleDetail = Math.max(scaleDetail, drinks ? 0.7 : 0.5);
	}

	$: prepareMenu(items);
</script>

<div
	class:drinks
	class:web
	style="--scale: {scale}; --scale-detail: {scaleDetail};"
>
	<section class="mains">
		<Mains {web} data={mains}></Mains>
	</section>

	{#if !web && !drinks}
		<section class="allergy">
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
		--color-fg-light: var(--color-pink);
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

	div.drinks {
		--color-fg-light: var(--color-yellow);
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

	.drinks .mains:before {
		background-color: var(--color-yellow-lighter);
	}

	.allergy:before {
		background-color: var(--color-pink-lighter);
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
		position: relative;
		opacity: 0.6;
	}
</style>
