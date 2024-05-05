<script>
	import { max } from "d3";
	export let data;
	export let web;

	function update() {
		// const maxItem = max(data, (d) => d.item?.length);
		// const maxDetail = max(data, (d) => d.detail?.length);
		// tuck = data.length <= 5;
	}

	$: update(data);
	$: tuck = web;
</script>

<div class="items" class:tuck>
	{#each data as { item, detail, price, header }}
		<div class="item" class:header>
			<div class="text">
				<p class="name">{item?.trim()}</p>
				<p class="detail">{@html detail?.trim()}</p>
			</div>
			{#if price}<p class="price">${price?.trim()}</p>{/if}
		</div>
	{/each}
</div>

<style>
	p {
		margin: 0;
		line-height: 1;
	}

	.text {
		display: flex;
		align-items: flex-end;
	}

	.header .text {
		background: var(--color-fg);
		color: var(--color-pink-light);
		padding: 0.25em;
	}

	.name {
		flex: 1;
		margin-right: calc(var(--padding) * var(--scale));
	}

	.header .name {
		margin-right: 0;
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
		margin-bottom: calc(var(--padding) * var(--scale));
	}

	.item:last-of-type {
		margin-bottom: 0;
	}

	.name {
		text-transform: uppercase;
		font-weight: 700;
		font-size: calc(var(--fs-big) * var(--scale));
	}

	.price {
		font-weight: 500;
		font-size: calc(var(--fs-big) * var(--scale));
		opacity: var(--opacity);
		margin-left: calc(var(--padding) * var(--scale));
	}

	.detail {
		font-size: calc(var(--fs-small) * var(--scale));
		opacity: var(--opacity);
		font-weight: 500;
	}

	.detail:empty {
		display: none;
	}

	.tuck .text {
		flex-direction: column;
		align-items: flex-start;
	}

	.tuck .detail {
		margin: 0;
		margin-top: calc(var(--padding) * 0.5);
		text-align: left;
	}
</style>
