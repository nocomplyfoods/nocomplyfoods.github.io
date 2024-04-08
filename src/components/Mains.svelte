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
	{#each data as { item, detail, price }}
		<div class="item">
			<div class="text">
				<p class="name">{item}</p>
				<p class="detail">{@html detail}</p>
			</div>
			{#if price}<p class="price">${price}</p>{/if}
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

	.name {
		flex: 1;
		margin-right: calc(var(--padding) * var(--scale));
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
		font-size: var(--fs-big);
		opacity: var(--opacity);
		margin-left: calc(var(--padding) * var(--scale));
		/* text-shadow: var(--shadow) var(--shadow) var(--color-pink); */
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
