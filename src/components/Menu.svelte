<script>
	import { max } from "d3";
	import { onMount } from "svelte";
	import Items from "$components/Items.svelte";

	// TODO no meta hide from stuff for
	export let web;
	export let items;
	export let drinks;

	let data = [];
	let scaleName = 1;
	let scaleDetail = 1;
	let lastUpdate;
	let updatedDisplay = "";
	let visible = [false, false, false];
	let durs = [930, 3000, 4500];

	export function egg() {
		const r = Math.floor(Math.random() * visible.length);
		visible[r] = true;
		setTimeout(() => {
			visible[r] = false;
		}, durs[r]);
	}

	function updateLabel(data) {
		const types = data.map((d) => d.type);
		const unique = [...new Set(types)];
	}

	function prepareMenu(items) {
		data = items
			// .slice(0, 10)
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

		const maxItems = 9;
		const overflow = Math.max(0, data.length - maxItems);
		const rateName = 0.05;
		const rateDetail = 0.05;
		const decreaseName = 1 - overflow * rateName;
		const decreaseDetail = 1 - overflow * rateDetail;

		scaleName = web ? 1 : decreaseName;
		scaleDetail = web ? 1 : decreaseDetail;

		const maxNameLen = max(data.map((d) => d.name?.length || 0));
		const maxDetailLen = max(data.map((d) => d.detail?.length || 0));
		// console.log({
		// 	overflow,
		// 	decrease,
		// 	scaleName,
		// 	scaleDetail,
		// 	maxNameLen,
		// 	maxDetailLen
		// });

		// alternatively, bump down in size if the names/details are long
		if (!web && maxNameLen > 30) scaleName -= 0.05;
		if (!web && maxDetailLen > 50) scaleDetail -= 0.05;

		// scale down drinks menus more?
		scaleName = web ? 1 : Math.max(scaleName, drinks ? 0.6 : 0.7);
		scaleDetail = web ? 1 : Math.max(scaleDetail, drinks ? 0.5 : 0.7);
	}

	$: prepareMenu(items);
</script>

<div
	class:drinks
	class:web
	style="--scale-name: {scaleName}; --scale-detail: {scaleDetail};"
>
	<section class="items">
		<Items {web} {data}></Items>
	</section>

	{#if !web}
		<section class="allergy">
			{#if drinks}
				<p>We are an alcohol free restaurant.</p>
			{:else}
				<p>
					Please inform us of any allergies. Consuming raw or undercooked meats,
					poultry, seafood, shellfish, or eggs may increase your risk of
					foodborne illness.
				</p>
			{/if}
		</section>
	{/if}

	{#if !web}
		<img
			class:visible={visible[0]}
			class="skate"
			src="/assets/images/skate.gif"
			alt="tk"
		/>
		<img
			class:visible={visible[1]}
			class="steve"
			src="/assets/images/steve.png"
			alt="tk"
		/>
		<div class="brothers" class:visible={visible[2]}>
			<img src="/assets/images/dimitri.png" alt="tk" />
			<img src="/assets/images/kosta.png" alt="tk" />
		</div>
	{/if}
</div>

<style>
	div {
		--fs-big: 3.25vw;
		--fs-small: 2.15vw;
		--padding: 2vw;
		--color-fg-lighter: var(--color-pink-lighter);
		--color-fg-light: var(--color-pink);
		--color-fg-medium: var(--color-pink-medium);
		--color-fg-black: var(--color-pink-black);
		--color-fg-dark: var(--color-pink-dark);
		--font-family: "Londrina Solid", sans-serif;
		width: 100vw;
		height: 100vh;
		background: #fff;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		pointer-events: none;
		user-select: none;
		position: relative;
	}

	div.web {
		--fs-big: clamp(16px, 1.5vw, 24px);
		--fs-small: clamp(14px, 1.25vw, 20px);
		--padding: 16px;
		/* --font-family: var(--mono); */
		width: auto;
		height: auto;
		background: transparent;
	}

	div.drinks {
		--color-fg-lighter: var(--color-pink-lighter);
		--color-fg-light: var(--color-yellow);
		--color-fg-medium: var(--color-yellow-medium);
		--color-fg-dark: var(--color-yellow-dark);
		--color-fg-black: var(--color-yellow-black);
	}

	p {
		margin: 0;
		line-height: 1;
	}

	section {
		position: relative;
		padding: var(--padding) calc(var(--padding) * 2);
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

	.web section {
		padding: var(--padding);
	}

	.items:before {
		background-color: var(--color-pink-lighter);
	}

	.drinks .items:before {
		background-color: var(--color-yellow-lighter);
	}

	.web section:before {
		background: transparent;
	}

	.items {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 1;
	}

	.allergy {
		flex: 0;
		position: absolute;
		bottom: 0.75em;
		left: 0;
		z-index: var(--z-top);
		width: 100%;
		padding: 0;
	}

	.allergy p {
		font-size: 1.62vw;
		line-height: 1;
		margin: 0;
		text-align: center;
		position: relative;
		text-align: center;
		color: var(--color-fg-dark);
		opacity: 0.75;
		margin: 0;
		font-family: var(--font-family);
		font-weight: 300;
	}

	.skate {
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: var(--z-top);
		opacity: 0;
		transition: opacity 0.2s;
	}

	.skate.visible {
		opacity: 1;
	}

	.steve {
		display: block;
		position: absolute;
		bottom: 0;
		right: 10%;
		width: 20%;
		z-index: var(--z-top);
		transform: translateY(100%);
		transition: transform 1.5s ease-in-out;
	}

	.steve.visible {
		opacity: 1;
		transform: translateY(40%);
	}

	.brothers {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: var(--z-top);
		transition: all 0.5s ease-in-out;
		opacity: 0;
		background: transparent;
	}

	.brothers.visible {
		opacity: 1;
	}

	.brothers img:first-of-type {
		position: absolute;
		bottom: 0;
		left: 40%;
		width: 10%;
		animation: swap1 1.5s ease-in-out infinite alternate;
	}

	.brothers img:last-of-type {
		position: absolute;
		bottom: 0;
		right: 40%;
		width: 10%;
		transform: translateY(5%);
		animation: swap2 1.5s ease-in-out infinite alternate;
	}

	@keyframes swap1 {
		0% {
			left: 40%;
		}
		10% {
			left: 40%;
		}
		90% {
			left: 50%;
		}
		100% {
			left: 50%;
		}
	}

	@keyframes swap2 {
		0% {
			right: 40%;
		}
		10% {
			right: 40%;
		}
		90% {
			right: 50%;
		}
		100% {
			right: 50%;
		}
	}
</style>
