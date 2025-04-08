<script>
	import { max } from "d3";
	import convertToCurly from "$utils/convertToCurly.js";
	import convertApostrophe from "$utils/convertApostrophe.js";
	export let data;
	export let web;

	function clean(text) {
		return convertApostrophe(convertToCurly(text.trim()));
	}
</script>

<div class="items" class:web>
	{#each data as { name, detail, price, header, note }}
		<div class="item" class:header class:note class:noDetail={!detail}>
			{#if web}
				<div class="top">
					<p class="name">{clean(name)}</p>
					{#if price}
						<p class="price">
							<span class="dots"></span>${@html price?.trim()}
						</p>
					{/if}
				</div>
				<div class="bottom">
					<p class="detail">{@html clean(detail)}</p>
				</div>
			{:else}
				<div class="text">
					<p class="name">{clean(name)}</p>
					<p class="detail">{@html clean(detail)}</p>
				</div>
				{#if price}
					<p class="price">
						<span class="dots"></span>${@html price?.trim()}
					</p>
				{/if}
			{/if}
		</div>
	{/each}
</div>

<style>
	/* .items {
		--scale: 0.72;
	} */

	p {
		margin: 0;
		line-height: 1;
	}

	.text {
		display: flex;
		align-items: flex-end;
	}

	/* everything but first .header */
	.header:not(:first-of-type) {
		margin-top: calc(var(--padding) * var(--scale) * 1);
	}

	.header .name {
		background: var(--color-fg);
		color: var(--color-fg-light);
		padding: 0.25em;
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

	.web .note {
		display: none;
	}

	.note .name {
		font-style: italic;
		font-weight: normal;
	}

	/* if last .item and of class note */
	.item:last-of-type.note {
		margin-top: calc(var(--padding) * var(--scale) * 2);
	}

	.name:empty {
		display: none;
	}

	.items {
		position: relative;
	}

	.item {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: calc(var(--padding) * var(--scale));
	}

	.item:last-of-type {
		margin-bottom: 0;
	}

	.web .item {
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
	}

	.name {
		text-transform: uppercase;
		font-weight: 700;
		font-size: calc(var(--fs-big) * var(--scale));
		flex: 1;
		margin-right: calc(var(--padding) * var(--scale));
	}

	.noDetail .name {
		margin-right: 0;
	}

	.web .name {
		flex: none;
		margin-right: 0;
	}

	.price {
		font-weight: 500;
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

	:global(.web .price span) {
		margin-top: calc(var(--padding) * 0.5);
	}

	.detail {
		font-size: calc(var(--fs-small) * var(--scale-detail));
		opacity: var(--opacity);
		font-weight: 500;
		line-height: 1.15;
	}

	.detail:empty {
		display: none;
	}

	.web .top {
		display: flex;
		justify-content: space-between;
		/* flex-direction: column;
		align-items: flex-start; */
	}

	.web .detail {
		margin: 0;
		margin-top: calc(var(--padding) * 0.5);
		margin-bottom: calc(var(--padding) * 0.25);
		margin-right: calc(var(--padding) * 2);
		text-align: left;
	}

	.dots {
		flex: 1;
		height: 1em;
		margin: 0 0.5em;
		background-image: radial-gradient(
			circle,
			var(--color-fg) 1px,
			transparent 1px
		);
		background-size: 8px 8px;
		background-position: bottom;
		background-repeat: repeat-x;
	}
</style>
