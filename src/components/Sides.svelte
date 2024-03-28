<script>
	export let data;
	export let uniform;

	$: rows = data.length > 4 ? 2 : 1;
	$: sideW = data.length
		? `${Math.floor((1 / Math.ceil(data.length / rows)) * 100)}%`
		: "none";
</script>

<div
	class="items"
	style="--side-width: {sideW}; --shrink: {rows === 2 ? 0.75 : 1};"
>
	{#each data as { item, price }}
		<div class="item">
			<div class="text">
				<p class="name">{item}</p>
			</div>

			<p class="price">
				{@html uniform ? "" : `$${price}`}
			</p>
		</div>
	{/each}
</div>

<style>
	p {
		margin: 0;
		line-height: 1;
	}

	.items {
		position: relative;
	}

	.item {
		display: flex;
		justify-content: space-between;
		margin-bottom: calc(var(--padding) * var(--scale));
	}

	.name {
		text-transform: uppercase;
		font-weight: 700;
		font-size: calc(var(--fs-big) * var(--scale));
		margin-right: calc(var(--padding) * var(--scale));
	}

	.price {
		font-weight: 500;
		font-size: calc(var(--fs-big) * var(--scale));
		opacity: var(--opacity);
		/* text-shadow: var(--shadow) var(--shadow) var(--color-yellow); */
	}

	.items {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		align-items: flex-start;
	}

	.name {
		font-size: calc(var(--fs-big) * var(--scale));
		margin: 0;
		text-align: center;
		/* text-shadow: var(--shadow) var(--shadow) var(--color-yellow); */
	}

	.item {
		display: flex;
		align-items: baseline;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 calc(var(--padding) * var(--scale));
		width: var(--side-width);
		transform: scale(var(--shrink));
	}

	.price {
		font-weight: 500;
		font-size: calc(var(--fs-small) * var(--scale));
		opacity: var(--opacity);
	}
</style>
