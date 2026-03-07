<script>
	import { max } from "d3";
	import convertToCurly from "$utils/convertToCurly.js";
	import convertApostrophe from "$utils/convertApostrophe.js";
	export let data;
	export let web;
	export let drinks;

	let itemHeight = 0;

	$: headers = data.filter((d) => (web ? false : d.header));
	$: items = data.filter((d) => (web ? !d.dessert : !d.header && !d.dessert));
	// from 1,2,3,4,5,6 but we want 1,4,2,5,3,6
	$: itemsOrdered =
		web || drinks
			? [...items]
			: (() => {
					const half = Math.ceil(items.length / 2);
					const result = [];
					for (let i = 0; i < half; i++) {
						result.push(items[i]);
						if (items[i + half] !== undefined) result.push(items[i + half]);
					}
					return result;
				})();
	$: desserts = data.filter((d) => d.dessert);

	function clean(text) {
		return convertApostrophe(convertToCurly(text.trim()));
	}
</script>

<div
	class="items"
	class:drinks
	class:web
	style="--item-height: {itemHeight}px;"
>
	{#each headers as { name }, i}
		<div class="item header" bind:clientHeight={itemHeight}>
			<p class="name">{clean(name)}</p>
		</div>
	{/each}

	<div class="inner">
		{#each itemsOrdered as { name, detail, price, note, header, dessert }, i}
			<div
				class="item"
				class:header
				class:note
				class:dessert
				class:noDetail={!detail}
			>
				<div class="top">
					<p class="name">{clean(name)}</p>
					{#if price}
						<p class="price">
							<span class="dots"></span><span
								class="value {web ? '' : 'text-outline'}"
								>{@html price?.trim()}</span
							>
						</p>
					{/if}
				</div>
				<div class="bottom">
					<p class="detail">{@html clean(detail) || "&nbsp;"}</p>
				</div>
			</div>
		{/each}
	</div>

	{#if desserts.length}
		<div class="inner inner-desserts">
			{#each desserts as { name, detail, price, note, header, dessert }, i}
				<div
					class="item"
					class:header
					class:note
					class:dessert
					class:noDetail={!detail}
				>
					<div class="top">
						<p class="name">{clean(name)}</p>
						{#if price}
							<p class="price">
								<span class="dots"></span><span
									class="value {web ? '' : 'text-outline'}"
									>{@html price?.trim()}</span
								>
							</p>
						{/if}
					</div>
					<div class="bottom">
						<p class="detail">{@html clean(detail) || "&nbsp;"}</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.items {
		position: relative;
	}

	/* left right */
	.inner {
		margin-top: calc(var(--item-height) * 1.25);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 calc(var(--padding) * 2);
		align-items: start;
	}

	p {
		margin: 0;
		line-height: 1;
		font-weight: 400;
		letter-spacing: 0.05em;
		font-family: var(--font-family);
	}

	.header:nth-of-type(1) {
		flex: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: auto;
		transform: translate(0, -50%);
	}

	.header:nth-of-type(2) {
		flex: 0;
		position: absolute;
		top: 0;
		left: calc(50% + var(--padding));
		width: auto;
		transform: translate(0, -50%);
		break-before: column;
	}

	.header .name {
		background: var(--color-fg-black);
		color: var(--color-fg-regular);
		padding: 0.25em;
		border-radius: 0.25em;
	}

	.header .detail {
		display: none;
	}

	.header .price {
		display: none;
	}

	.note .name {
		font-style: italic;
		font-weight: 400;
	}

	.name:empty {
		display: none;
	}

	.item {
		margin-bottom: calc(var(--scale-name) * var(--padding) * 0.75);
		break-inside: avoid;
		page-break-inside: avoid;
		width: 100%;
	}

	.top {
		display: flex;
		justify-content: space-between;
	}

	.item .bottom {
		margin-top: 0.5vh;
	}

	/* .item .top .name {
		flex: ;
	} */

	.item:last-of-type {
		margin-bottom: 0;
	}

	.name {
		text-transform: lowercase;
		font-size: calc(var(--fs-big) * var(--scale-name));
		flex: none;
		margin: 0;
		color: var(--color-fg-black);
	}

	.price {
		flex: 1;
		display: flex;
		align-items: flex-end;
	}

	.price span.value {
		color: var(--color-fg-dark);
		--stroke-width: 0;
		font-size: calc(var(--fs-big) * var(--scale-name));
	}

	:global(.price span.dots) {
		display: block;
	}

	.detail {
		color: var(--color-fg-dark);
		font-size: calc(var(--fs-small) * var(--scale-detail));
		font-weight: 300;
		margin-top: 0.325em;
		letter-spacing: 0.075em;
	}

	.detail:empty {
		display: none;
	}

	.dots {
		flex: 1;
		margin: 0 0.5em;
		border-bottom: 0.25vw dotted var(--color-fg-dark);
		opacity: 0.75;
		transform: translateY(-0.25em);
	}

	.web .inner {
		column-count: 1;
		grid-template-columns: 1fr;
		column-gap: 0;
		margin-top: 0;
	}

	.web .item {
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
		margin-bottom: calc(var(--scale-name) * var(--padding) * 1);
	}

	.web .top {
		display: flex;
		justify-content: space-between;
	}

	.web .name {
		flex: none;
		margin-right: 0;
	}

	.web .header {
		margin-top: calc(var(--padding) * 0.5);
	}

	.web .header .name {
		border-radius: 0.5rem;
	}

	.web .detail {
		margin: 0;
	}

	.web .dots {
		border-bottom: 2px dotted var(--color-fg-dark);
	}

	.web .note {
		display: none;
	}

	.web .header:nth-of-type(1),
	.web .header:nth-of-type(2) {
		break-before: auto;
		position: relative;
		transform: translate(0, 0);
		left: auto;
	}

	.web .noDetail .detail {
		display: none;
	}

	.web .price span.value {
		color: var(--color-fg-dark);
	}

	.inner-desserts {
		padding-top: calc(var(--padding) * 0.5);
		margin-top: calc(var(--item-height) * 0.5);
		background: var(--color-fg-lighter);
		padding: calc(var(--padding) * 0.5);
		border-radius: 0.5rem;
		width: calc(100% + var(--padding));
		transform: translateX(calc(var(--padding) * -0.5));
	}

	.web .inner-desserts {
		background: none;
		padding: 0;
		border-radius: 0;
		width: 100%;
		transform: translateX(0);
	}

	.dessert:nth-of-type(odd) {
		/* padding-right: calc(var(--padding) * 0.5); */
	}

	.web .dessert:nth-of-type(odd) {
		padding-left: 0;
	}
</style>
