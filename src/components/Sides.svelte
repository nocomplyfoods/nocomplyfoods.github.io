<script>
	export let data;
	export let uniform;
	export let split;
</script>

<div class="items" class:split>
	{#each data as { item, price }}
		<div class="item">
			<div class="text">
				<p class="name">{item}</p>
			</div>
			<div class="amount">
				<p class="price">
					{@html uniform ? "" : `$${price}`}
				</p>
			</div>
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
		margin-bottom: var(--padding);
	}

	.name {
		text-transform: uppercase;
		font-weight: 700;
		font-size: var(--fs-big);
		margin-right: var(--padding);
	}

	.price {
		font-weight: 500;
		font-size: var(--fs-big);
	}

	.items {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.items.split {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.name {
		font-size: var(--fs-small);
		margin: 0;
		text-align: center;
	}

	.item {
		display: flex;
		align-items: baseline;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 var(--padding);
		min-width: var(--side-width);
	}

	.split .item {
		width: 100%;
	}

	.price {
		font-weight: 500;
		font-size: var(--fs-small);
		opacity: 0.7;
	}
</style>
