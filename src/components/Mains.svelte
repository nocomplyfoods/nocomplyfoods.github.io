<script>
	import { max } from "d3";
	import convertToCurly from "$utils/convertToCurly.js";
	import convertApostrophe from "$utils/convertApostrophe.js";
	export let data;
	export let web;

	let itemHeights = [0];

	$: maxHeight = max(itemHeights);

	function clean(text) {
		return convertApostrophe(convertToCurly(text.trim()));
	}
</script>

<div class="items" class:web style="--item-height: {maxHeight}px;">
	{#each data as { name, detail, price, header, note }, i}
		<div
			class="item"
			class:header
			class:note
			class:noDetail={!detail}
			bind:clientHeight={itemHeights[i]}
		>
			<div class="top">
				<p class="name">{clean(name)}</p>
				{#if price}
					<p class="price">
						<span class="dots"></span>${@html price?.trim()}
					</p>
				{/if}
			</div>
			<div class="bottom">
				<p class="detail">{@html clean(detail) || "&nbsp;"}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.items {
		margin-top: calc(var(--item-height) * 2);
		position: relative;
		column-count: 2;
		column-gap: calc(var(--padding) * 2);
	}

	p {
		margin: 0;
		line-height: 1;
		font-weight: 300;
		font-family: var(--font-family);
	}

	/* everything but first .header */
	/* .header:not(:first-of-type) {
		margin-top: calc(var(--padding) * var(--scale) * 1);
	} */

	.header:nth-child(1 of .header) {
		flex: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: auto;
		transform: translate(0, -150%);
	}

	.header:nth-child(2 of .header) {
		flex: 0;
		position: absolute;
		top: 0;
		left: calc(50% + var(--padding));
		width: auto;
		transform: translate(0, -150%);
		break-before: column;
	}

	.header .name {
		background: var(--color-fg);
		color: var(--color-fg-light);
		padding: 0.25em;
		border-radius: 0.25em;
	}

	.header .name {
		margin-right: 0;
	}

	.header .detail {
		display: none;
	}

	.header .price {
		display: none;
	}

	.note .name {
		font-style: italic;
		font-weight: normal;
	}

	.name:empty {
		display: none;
	}

	.item {
		/* display: flex; */
		/* justify-content: space-between; */
		/* align-items: flex-start; */
		margin-bottom: calc(var(--padding) * var(--scale));
		break-inside: avoid;
		page-break-inside: avoid;
		width: 100%;
	}

	.item .top {
		display: flex;
		justify-content: space-between;
	}

	.item .top .name {
		flex: none;
		margin: 0;
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
		/* text-transform: capitalize; */
		letter-spacing: 0.05em;
		font-weight: 400;
		/* font-weight: 700; */
		font-size: calc(var(--fs-big) * var(--scale));
		flex: 1;
		margin-right: calc(var(--padding) * var(--scale));
	}

	.noDetail .name {
		/* margin-right: 0; */
	}

	.price {
		font-weight: 500;
		letter-spacing: 0.05em;
		font-size: calc(var(--fs-big) * var(--scale));
		opacity: var(--opacity);
		/* margin-left: calc(var(--padding) * var(--scale)); */
		text-align: right;
		flex: 1;
		display: flex;
		align-items: flex-end;
	}

	:global(.price span) {
		font-size: calc(var(--fs-small) * var(--scale));
		display: block;
	}

	.detail {
		font-size: calc(var(--fs-small) * var(--scale-detail));
		opacity: var(--opacity);
		/* font-weight: 500; */
		line-height: 1.15;
		letter-spacing: 0.05em;
	}

	.detail:empty {
		display: none;
	}

	.dots {
		flex: 1;
		/* height: 0.5em; */
		/* background-image: radial-gradient(
			circle,
			var(--color-fg) 1.5px,
			transparent 1.5px
		);
		background-size: 8px 8px;
		background-position: bottom;
		background-repeat: repeat-x; */
		margin: 0 0.5em;
		border-bottom: 2px dotted var(--color-fg);
		opacity: var(--opacity);
		opacity: 0.5;
	}

	.web.items {
		column-count: 1;
		column-gap: 0;
		margin-top: 0.5em;
	}

	.web .item {
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
	}

	.web .top {
		display: flex;
		justify-content: space-between;
		/* flex-direction: column;
		align-items: flex-start; */
	}

	.web .name {
		flex: none;
		margin-right: 0;
	}

	.web .header .name {
		border-radius: 0;
	}

	.web .detail {
		margin: 0;
		margin-top: calc(var(--padding) * 0.5);
		margin-bottom: calc(var(--padding) * 0.25);
		margin-right: calc(var(--padding) * 2);
		text-align: left;
	}

	.web .note {
		display: none;
	}

	.web .header:nth-child(1 of .header),
	.web .header:nth-child(2 of .header) {
		break-before: auto;
		position: relative;
		transform: translate(0, 0);
		left: auto;
	}

	.web .noDetail .detail {
		display: none;
	}

	:global(.web .price span) {
		margin-top: calc(var(--padding) * 0.5);
	}
</style>
