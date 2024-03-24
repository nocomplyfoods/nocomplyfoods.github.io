<script>
	import { max } from "d3";
	export let data;
	export let split;
	export let hasSides;

	let tuck = false;
	let scale = 1;

	function update() {
		const maxItem = max(data, (d) => d.item?.length);
		const maxDetail = max(data, (d) => d.detail?.length);
		// assuming noSides...
		// reduce font size once max items > 8
		const overflow = Math.max(0, data.length - 8);
		scale = 1 - overflow * 0.075;
		console.log({ scale });

		// tuck = data.length <= 5;
	}

	$: update(data);
</script>

<div class="items" class:split class:tuck style="--scale: {scale};">
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

	.split .text {
		flex-direction: column;
		margin-bottom: calc(var(--padding) * 1.5);
	}

	.tuck .text {
		flex-direction: column;
	}

	.tuck .text {
		align-items: center;
	}

	.tuck .detail {
		margin-top: calc(var(--padding) * 0.5);
		text-align: center;
	}

	.split .detail {
		margin-top: calc(var(--padding) * 0.5);
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
		/* justify-content: space-between; */
	}

	.tuck .item {
		justify-content: center;
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
		/* background: var(--color-yellow); */
		/* background: var(--color-pink); */
		/* outline: 0.3vw solid var(--color-pink); */
		/* padding: 0.3vw; */
		/* border-bottom: 0.5vw solid var(--color-pink); */
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
</style>
