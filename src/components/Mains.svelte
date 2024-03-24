<script>
	import { max } from "d3";
	export let data;
	export let split;
	export let hasSides;

	let tuck = false;
	function update() {
		// const maxItem = max(data, (d) => d.item?.length);
		// const maxDetail = max(data, (d) => d.detail?.length);
		// tuck = data.length <= 5;
	}

	$: update(data);
</script>

<div class="items" class:split class:tuck>
	{#each data as { item, detail, price }}
		<div class="item">
			<div class="text">
				<p class="name">
					{item}
				</p>
				<p class="detail">{detail || ""}</p>
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
		align-items: baseline;
		margin-bottom: calc(var(--padding) * var(--scale));
	}

	.name {
		flex: 1;
		text-shadow: var(--shadow) var(--shadow) var(--color-pink);
	}

	.items {
		position: relative;
	}

	.item {
		display: flex;
	}

	.name {
		text-transform: uppercase;
		font-weight: 700;
		font-size: calc(var(--fs-big) * var(--scale));
	}

	.price {
		font-weight: 500;
		font-size: var(--fs-big);
		text-shadow: var(--shadow) var(--shadow) var(--color-pink);
		opacity: 0.7;
		margin-left: calc(var(--padding) * var(--scale));
	}

	.detail {
		margin-left: calc(var(--padding) * var(--scale));
		font-size: calc(var(--fs-small) * var(--scale));
		opacity: 0.7;
	}

	.detail:empty {
		display: none;
	}

	/* .split .text {
		flex-direction: column;
		margin-bottom: calc(var(--padding) * 1.5);
	} */

	/* .split .detail {
		margin-top: calc(var(--padding) * 0.5);
	} */

	/* .tuck .item {
		justify-content: center;
	} */

	/*
	.tuck .text {
		flex-direction: column;
	}

	.tuck .text {
		align-items: center;
	}

	.tuck .detail {
		margin-top: calc(var(--padding) * 0.5);
		text-align: center;
	} */
</style>
